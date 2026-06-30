import logger from '../config/logger.js';

export async function streamOpenRouterCompletion(prompt, model, res) {
    const targetModel = model || 'openai/gpt-4o-mini';
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
        throw new Error('CRITICAL_SECURITY_FAULT: OPENROUTER_API_KEY is undefined in runtime environment.');
    }

    logger.info(`[OpenRouterService] Initiating stream | Model: ${targetModel}`);

    // High-end SSE headers
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'X-Accel-Buffering': 'no'
    });

    try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'HTTP-Referer': process.env.SITE_URL || 'https://adcreator-ai.enterprise.io',
                'X-Title': 'AdCreator AI Elite Intelligence Matrix',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: targetModel,
                messages: [{ role: 'user', content: prompt }],
                stream: true
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            logger.error(`[UpstreamError] Status: ${response.status} | Text: ${errorText}`);
            res.write(`data: [ERROR] Upstream integration fault: ${response.status}\n\n`);
            res.end();
            return;
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');
            
            for (const line of lines) {
                const trimmed = line.trim();
                if (trimmed.startsWith('data: ')) {
                    const dataPart = trimmed.substring(6);
                    if (dataPart === '[DONE]') {
                        continue;
                    }
                    try {
                        const parsed = JSON.parse(dataPart);
                        const content = parsed.choices?.[0]?.delta?.content || '';
                        if (content) {
                            res.write(content);
                        }
                    } catch (e) {
                        // Silently catch incomplete JSON chunks encountered during streaming
                    }
                }
            }
        }
        res.end();
    } catch (err) {
        logger.error(`[StreamExecutionException] Trace: ${err.stack}`);
        if (!res.writableEnded) {
            res.write(`data: [EXCEPTION] Data stream broken during LLM execution.\n\n`);
            res.end();
        }
    }
}
