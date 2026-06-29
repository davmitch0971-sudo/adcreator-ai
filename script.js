/**
 * ==========================================================================
 * ADCREATOR AI INTERACTIVE ARCHITECTURE ENGINE
 * CORE SOURCE COUPLING & COMPONENT ROUTING LOGIC
 * ==========================================================================
 */

// Application Global State Matrix
const AppState = {
    selectedPlatform: 'Meta',
    generationCount: 0,
    clientStatus: 'UNAUTHENTICATED'
};

// High-End Luxury Copy Blueprint Manifests
const FrameworkBlueprints = {
    Meta: {
        luxury: `[AdCreator Pro Meta Cinematic Narrative]\n\n🏆 THE STANDARD: Stop settling for repetitive outcomes. Re-engineer your market presence.\n\nIntroducing \${name}. Precision built for elite consumers who reject compromised quality.\n\n✦ Built for luxury positioning\n✦ Calibrated conversion metrics\n\n👉 Secure exclusive onboarding details within.`,
        cinematic: `[AdCreator Pro Meta 8K Visual Directive]\n\n🎬 HOOK: A world defined by precision engineering. Shadows lift to reveal complete clarity.\n\nThis is the arrival of \${name}.\n\nNo filler. No generic structural patterns. Just pure, targeted impact built for high-performance scale.\n\n🚀 Tap 'Learn More' to claim dominance over your technical territory.`,
        aggressive: `[AdCreator Pro Meta Direct Response Protocol]\n\n🔥 FACT: Generic frameworks yield standard conversions. You deserve a verified upgrade.\n\n\${name} outpaces obsolete methodologies by a direct 4.8X margin.\n\nStop losing allocation volume. Deploy the engine right now.`
    },
    Google: {
        luxury: `Headline 1: Premium \${name} Engine\nHeadline 2: Absolute Structural Dominance\nHeadline 3: Claim Luxury Positioning\nDescription 1: Calibrated messaging designed specifically for high-ticket market segments. Acquire immediate priority access.\nDescription 2: Experience unmatched system deployment today.`,
        cinematic: `Headline 1: Cinematic 8K Narrative\nHeadline 2: Re-Imagine \${name}\nHeadline 3: Complete Precision Control\nDescription 1: Upgrade from generic automated text generation. Discover the architectural shift behind premier metrics.\nDescription 2: Deploy production-ready creative pipelines instantly.`,
        aggressive: `Headline 1: Scale Your Strategy\nHeadline 2: 4.8X Conversion Metric\nHeadline 3: Run \${name} Now\nDescription 1: Stop draining your operational funding budgets on inefficient pipelines. Optimize your copy instantly.\nDescription 2: Zero technical compromise. Download performance assets.`
    },
    TikTok: {
        luxury: `[TikTok Script Hook]: (Camera drifts over absolute minimalism) "This isn't for everyone. Only those who demands absolute precision control over their operational stack."\n\n[Body]: Elevate your brand narrative using \${name}. #luxurytech #precision #businessgrowth`,
        cinematic: `[TikTok 8K Scene Directive]: (Rapid macro cuts, shifting iridescent glow) "Most options look entirely identical. Until you step inside this platform."\n\n[Body]: \${name} breaks standard boundaries. #systemarchitecture #filmmaking #nextlevel`,
        aggressive: `[TikTok Performance Hook]: (Direct finger-pointing at camera) "Your conversion setup is dropping funding because your text scripts look completely generic."\n\n[Body]: Swap to \${name} instantly. #roi #businessowner #optimization`
    }
};

/**
 * Platform Selection Manager
 * Updates style visibility rules across toggle components
 */
function setPlatform(platformName) {
    AppState.selectedPlatform = platformName;
    
    // Clear styling across active triggers
    const buttons = ['btnMeta', 'btnGoogle', 'btnTikTok'];
    buttons.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.classList.remove('active');
    });

    // Append design rules to active element
    const activeBtn = document.getElementById(`btn${platformName}`);
    if (activeBtn) activeBtn.classList.add('active');
    
    logConsoleMessage(`System routing switched targeting architecture framework: \${platformName}`);
}

/**
 * Core Copy Generation Handler
 * Processes local dataset variables into chosen templates
 */
function generatePremiumAd() {
    const nameInput = document.getElementById('productName');
    const styleInput = document.getElementById('adType');
    const outputConsole = document.getElementById('outputConsole');

    if (!nameInput || !nameInput.value.trim()) {
        alert("Input validation failure: Product or Brand name entry is strictly required.");
        return;
    }

    const name = nameInput.value.trim();
    const style = styleInput ? styleInput.value : 'luxury';
    const platform = AppState.selectedPlatform;

    outputConsole.value = "Executing matrix transformation... Loading framework assets...";

    setTimeout(() => {
        let template = FrameworkBlueprints[platform][style];
        // Parse dynamic template bindings
        let compiledOutput = template.replace(/\\\${name}/g, name);

        outputConsole.value = compiledOutput;
        AppState.generationCount++;
        logConsoleMessage(`Successfully compiled asset stream model for brand target [ \${name} ]`);
    }, 450);
}

/**
 * Utility Clipboard Interaction Manager
 */
function copyAssetOutput() {
    const textTarget = document.getElementById('outputConsole');
    if (!textTarget || !textTarget.value) return;

    textTarget.select();
    document.execCommand('copy');
    
    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
        const primaryText = copyBtn.innerText;
        copyBtn.innerText = "ASSET COPIED TO LOCAL CLIPBOARD";
        copyBtn.style.borderColor = "#10b981";
        copyBtn.style.color = "#10b981";
        
        setTimeout(() => {
            copyBtn.innerText = primaryText;
            copyBtn.style.borderColor = "#1f2937";
            copyBtn.style.color = "#ffffff";
        }, 2000);
    }
}

/**
 * Internal Diagnostic Logger Pipeline
 */
function logConsoleMessage(message) {
    console.log(`[AdCreator System Log] \${message}`);
}

// Initial System Sequence Checklist Trigger
document.addEventListener("DOMContentLoaded", () => {
    logConsoleMessage("Interactive asset framework modules fully loaded into client memory.");
});
