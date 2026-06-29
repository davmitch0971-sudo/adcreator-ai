/* ==========================================================================
   ADCREATOR AI — ENTERPRISE INTELLIGENCE ENGINE BACKBONE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize Client Infrastructure & Authentication Status
    const initSession = () => {
        const pulse = document.getElementById('sessionPulse');
        const statusText = document.getElementById('statusText');
        
        if (pulse && statusText) {
            setTimeout(() => {
                pulse.className = 'pulse-dot-green';
                statusText.textContent = 'API INFRASTRUCTURE SECURE: ENTERPRISE ACTIVE';
            }, 800);
        }
    };
    initSession();

    // 2. Asynchronous Generation Pipeline & Data Matrix Calculation
    const generationEngine = async () => {
        const btn = document.getElementById('executeGenerationBtn');
        const btnText = btn.querySelector('.btn-text');
        const spinner = btn.querySelector('.btn-loader-spinner');
        const consoleWrapper = document.getElementById('consoleOutputWrapper');
        const consoleArea = document.getElementById('outputConsoleArea');
        const consoleTime = document.getElementById('consoleTime');

        // Extract Node Data Sets
        const platform = document.getElementById('platformSelector')?.value || 'Meta';
        const archetype = document.getElementById('archetypeSelector')?.value || 'Luxury';
        const brand = document.getElementById('brandNameInput')?.value || 'AdCreator';
        const audience = document.getElementById('audienceInput')?.value || 'Discerning Users';

        // Trigger UI Loading State
        btn.disabled = true;
        btnText.textContent = 'Processing Enterprise Pipeline...';
        spinner.classList.remove('hidden');
        consoleWrapper.classList.remove('hidden');
        consoleArea.value = 'INIT: Establishing encrypted connection to pipeline...\nANALYSIS: Parsing structural node targets...\nSYNTHESIZING: Applying enterprise narrative archetype...';
        consoleTime.textContent = 'SYSTEM: PROCESSING';

        // Simulate Asynchronous Compute Delay
        await new Promise(resolve => setTimeout(resolve, 2500));

        // Compile Source-Intelligent Premium Asset Payload
        const generatedPayload = `========================================
⚡ ADCREATOR ENTERPRISE ASSET STREAM ⚡
========================================
TARGET PLATFORM : ${platform}
ARCHETYPE       : ${archetype}
BRAND IDENTITY  : ${brand}
AUDIENCE FOCUS  : ${audience}
----------------------------------------
NARRATIVE:
Command professional-grade campaign narrative with a precision creative engine built for high-value brands. The shift to ${brand} premium intelligence framework provides total narrative control, distinguishing your enterprise from generic automated drafts.
========================================
STATUS: ASSET GRID GENERATED SUCCESSFULLY`;

        // Render Stream Output
        consoleArea.value = generatedPayload;
        consoleTime.textContent = 'SYSTEM: READY';

        // Revert UI Loading State
        btn.disabled = false;
        btnText.textContent = 'Generate Elite Narrative';
        spinner.classList.add('hidden');

        // Animate Performance Matrix Upgrades in Data Table
        const metrics = ['ctr', 'conversion', 'cpc', 'roas'];
        metrics.forEach(metric => {
            const row = document.querySelector(`.matrix-row[data-metric="${metric}"]`);
            if (row) {
                const valEl = row.querySelector('.metric-val');
                if (valEl) {
                    valEl.classList.remove('standard-val');
                    valEl.classList.add('premium-val-active');
                }
            }
        });

        // Trigger Graph Vector Glow Animation
        const proLine = document.querySelector('.glow-line-pro');
        if (proLine) {
            proLine.style.animation = 'none';
            void proLine.offsetWidth; // Trigger reflow
            proLine.style.animation = 'drawVectorPath 3s ease-in-out forwards, glowPulse 2s infinite alternate';
        }
    };

    // Attach Event Handlers
    document.getElementById('executeGenerationBtn')?.addEventListener('click', generationEngine);

    // 3. Clipboard Asset Grid Payload Transfer Functionality
    document.getElementById('copyToClipboardBtn')?.addEventListener('click', () => {
        const consoleArea = document.getElementById('outputConsoleArea');
        if (consoleArea && consoleArea.value) {
            navigator.clipboard.writeText(consoleArea.value).then(() => {
                alert('Elite Narrative Asset successfully copied to enterprise clipboard memory.');
            }).catch(err => {
                console.error('Clipboard write access blocked:', err);
            });
        }
    });

    // 4. Client Authentication Handler
    document.getElementById('headerSignInBtn')?.addEventListener('click', () => {
        const email = document.getElementById('authEmail')?.value;
        if (email) {
            alert(`Authentication protocol updated for identity node: ${email}`);
        }
    });
});
