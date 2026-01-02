// NVC Feelings organized by Circumplex Model (Russell & Feldman Barrett)
// Two dimensions: Valence (pleasant/unpleasant) and Arousal (high/low activation)
const feelings = {
    // Quadrant 1: High Arousal + Pleasant (Activated Pleasant)
    highPleasant: [
        'alive',
        'amazed',
        'amused',
        'animated',
        'aroused',
        'astonished',
        'awed',
        'blissful',
        'curious',
        'dazzled',
        'delighted',
        'eager',
        'ecstatic',
        'elated',
        'enchanted',
        'energetic',
        'energized',
        'engaged',
        'enlivened',
        'enthralled',
        'enthusiastic',
        'entranced',
        'exhilarated',
        'exuberant',
        'excited',
        'fascinated',
        'giddy',
        'inspired',
        'invigorated',
        'involved',
        'joyful',
        'jubilant',
        'lively',
        'passionate',
        'radiant',
        'rapturous',
        'spellbound',
        'stimulated',
        'surprised',
        'thrilled',
        'tickled',
        'vibrant',
        'wonder'
    ],
    // Quadrant 2: High Arousal + Unpleasant (Activated Unpleasant)
    highUnpleasant: [
        'afraid',
        'aggravated',
        'agitated',
        'alarmed',
        'angry',
        'annoyed',
        'anxious',
        'apprehensive',
        'distressed',
        'edgy',
        'enraged',
        'exasperated',
        'fear',
        'fidgety',
        'flustered',
        'frazzled',
        'frightened',
        'frustrated',
        'furious',
        'hostile',
        'impatient',
        'incensed',
        'indignant',
        'irate',
        'irked',
        'irritable',
        'irritated',
        'jittery',
        'livid',
        'nervous',
        'outraged',
        'overwhelmed',
        'panicked',
        'perturbed',
        'petrified',
        'rattled',
        'restless',
        'scared',
        'shaky',
        'shame',
        'shocked',
        'startled',
        'stressed',
        'stressed out',
        'tense',
        'terrified',
        'turbulent',
        'turmoil',
        'unnerved',
        'unsettled',
        'upset',
        'wary'
    ],
    // Quadrant 3: Low Arousal + Unpleasant (Deactivated Unpleasant)
    lowUnpleasant: [
        'agony',
        'alienated',
        'aloof',
        'anguished',
        'apathetic',
        'baffled',
        'beat',
        'bereaved',
        'bewildered',
        'bored',
        'burnt out',
        'cold',
        'concerned',
        'confused',
        'dazed',
        'dejected',
        'depleted',
        'depressed',
        'despair',
        'despondent',
        'detached',
        'devastated',
        'disappointed',
        'discombobulated',
        'disconcerted',
        'disconnected',
        'discouraged',
        'disgruntled',
        'disheartened',
        'dismayed',
        'displeased',
        'distant',
        'distracted',
        'distraught',
        'disturbed',
        'dread',
        'embarrassed',
        'exhausted',
        'fatigue',
        'foreboding',
        'forlorn',
        'fragile',
        'gloomy',
        'grief',
        'guarded',
        'guilty',
        'heartbroken',
        'heavy hearted',
        'helpless',
        'hesitant',
        'hopeless',
        'horrified',
        'hurt',
        'insecure',
        'jealous',
        'lethargic',
        'listless',
        'lonely',
        'longing',
        'lost',
        'melancholy',
        'miserable',
        'mistrustful',
        'mortified',
        'nostalgic',
        'numb',
        'pining',
        'puzzled',
        'regretful',
        'reluctant',
        'remorseful',
        'removed',
        'resentful',
        'reserved',
        'sad',
        'sleepy',
        'tired',
        'torn',
        'troubled',
        'uneasy',
        'uncomfortable',
        'unhappy',
        'uninterested',
        'vulnerable',
        'weary',
        'withdrawn',
        'worn out',
        'worried',
        'wretched'
    ],
    // Quadrant 4: Low Arousal + Pleasant (Deactivated Pleasant)
    lowPleasant: [
        'absorbed',
        'affectionate',
        'alert',
        'appreciative',
        'calm',
        'centered',
        'clear headed',
        'comfortable',
        'compassionate',
        'confident',
        'content',
        'empowered',
        'encouraged',
        'engrossed',
        'equanimous',
        'expectant',
        'friendly',
        'fulfilled',
        'glad',
        'grateful',
        'happy',
        'hopeful',
        'interested',
        'intrigued',
        'loving',
        'mellow',
        'moved',
        'open',
        'open hearted',
        'optimistic',
        'peaceful',
        'pleased',
        'proud',
        'quiet',
        'rejuvenated',
        'relaxed',
        'relieved',
        'renewed',
        'rested',
        'restored',
        'revived',
        'safe',
        'satisfied',
        'secure',
        'self-conscious',
        'sensitive',
        'serene',
        'still',
        'sympathetic',
        'tender',
        'thankful',
        'touched',
        'tranquil',
        'trusting',
        'warm',
        'wistful',
        'wonderful'
    ],
};

// NVC Universal Human Needs
const needs = {
    connection: [
        'acceptance',
        'affection',
        'appreciation',
        'belonging',
        'closeness',
        'communication',
        'communion',
        'community',
        'companionship',
        'compassion',
        'connection',
        'consideration',
        'consistency',
        'cooperation',
        'empathy',
        'equality',
        'inclusion',
        'intimacy',
        'love',
        'mutuality',
        'nurturing',
        'presence',
        'respect',
        'safety',
        'security',
        'self-respect',
        'sharing',
        'stability',
        'support',
        'to know and be known',
        'to see and be seen',
        'to understand and be understood',
        'trust',
        'warmth'
    ],
    physical: [
        'air',
        'ease',
        'exercise',
        'food',
        'movement',
        'rest',
        'sexual expression',
        'shelter',
        'sleep',
        'touch',
        'water'
    ],
    autonomy: [
        'authenticity',
        'autonomy',
        'choice',
        'freedom',
        'independence',
        'integrity',
        'self-expression',
        'space',
        'spontaneity'
    ],
    meaning: [
        'awareness',
        'beauty',
        'celebration of life',
        'challenge',
        'clarity',
        'competence',
        'consciousness',
        'contribution',
        'creativity',
        'discovery',
        'effectiveness',
        'efficacy',
        'growth',
        'harmony',
        'hope',
        'humor',
        'inspiration',
        'joy',
        'learning',
        'mourning',
        'order',
        'participation',
        'play',
        'purpose',
        'recognition',
        'stimulation',
        'to matter',
        'understanding'
    ]
};

// Quasi-feelings and their translations
const quasiFeelings = {
    'abandoned': {
        feelings: ['fear', 'hurt', 'insecure', 'lonely', 'sad', 'scared', 'vulnerable'],
        needs: ['belonging', 'closeness', 'connection', 'safety', 'support']
    },
    'abused': {
        feelings: ['angry', 'devastated', 'grief', 'hurt', 'scared', 'shame'],
        needs: ['freedom', 'respect', 'safety', 'trust', 'understanding']
    },
    'attacked': {
        feelings: ['alert', 'angry', 'disturbed', 'frustrated', 'hurt', 'scared'],
        needs: ['consideration', 'freedom', 'respect', 'safety', 'space', 'trust', 'understanding']
    },
    'belittled': {
        feelings: ['angry', 'embarrassed', 'hurt', 'insecure', 'sad'],
        needs: ['appreciation', 'belonging', 'recognition', 'respect', 'to matter']
    },
    'betrayed': {
        feelings: ['angry', 'dazed', 'disappointed', 'hurt', 'sad', 'shame', 'shocked'],
        needs: ['integrity', 'respect', 'safety', 'sharing', 'trust']
    },
    'blamed': {
        feelings: ['angry', 'confused', 'embarrassed', 'frustrated', 'hurt', 'lonely', 'shame'],
        needs: ['acceptance', 'consideration', 'respect', 'understanding']
    },
    'boxed-in': {
        feelings: ['anxious', 'concerned', 'frustrated', 'lonely', 'restless'],
        needs: ['autonomy', 'choice', 'freedom', 'space', 'support', 'understanding']
    },
    'bullied': {
        feelings: ['angry', 'anxious', 'helpless', 'hurt', 'scared'],
        needs: ['autonomy', 'consideration', 'respect', 'safety']
    },
    'cheated': {
        feelings: ['angry', 'disappointed', 'hurt', 'resentful'],
        needs: ['integrity', 'respect', 'trust']
    },
    'cornered': {
        feelings: ['anxious', 'scared'],
        needs: ['choice', 'freedom', 'safety', 'space']
    },
    'criticized': {
        feelings: ['embarrassed', 'frustrated', 'hurt'],
        needs: ['acceptance', 'appreciation', 'respect', 'understanding']
    },
    'diminished': {
        feelings: ['angry', 'embarrassed', 'frustrated', 'hurt'],
        needs: ['appreciation', 'respect']
    },
    'discounted': {
        feelings: ['frustrated', 'hurt'],
        needs: ['appreciation', 'consideration', 'respect', 'to matter']
    },
    'disrespected': {
        feelings: ['angry', 'frustrated', 'hurt'],
        needs: ['consideration', 'equality', 'respect']
    },
    'distrusted': {
        feelings: ['disconnected', 'hurt', 'sad', 'wary'],
        needs: ['integrity', 'trust']
    },
    'harassed': {
        feelings: ['angry', 'anxious', 'frustrated'],
        needs: ['respect', 'safety']
    },
    'ignored': {
        feelings: ['frustrated', 'hurt', 'lonely', 'sad'],
        needs: ['connection', 'consideration', 'to matter']
    },
    'insulted': {
        feelings: ['angry', 'embarrassed', 'hurt'],
        needs: ['consideration', 'respect']
    },
    'interrupted': {
        feelings: ['annoyed', 'frustrated'],
        needs: ['consideration', 'respect', 'space']
    },
    'intimidated': {
        feelings: ['anxious', 'scared', 'tense', 'uncomfortable'],
        needs: ['equality', 'respect', 'safety', 'space']
    },
    'invalidated': {
        feelings: ['confused', 'frustrated', 'hurt'],
        needs: ['respect', 'understanding']
    },
    'invisible': {
        feelings: ['disconnected', 'frustrated', 'lonely', 'sad'],
        needs: ['connection', 'to matter']
    },
    'isolated': {
        feelings: ['anxious', 'disconnected', 'lonely', 'sad'],
        needs: ['belonging', 'community', 'companionship', 'connection']
    },
    'left out': {
        feelings: ['hurt', 'lonely', 'sad'],
        needs: ['belonging', 'connection', 'consideration', 'inclusion']
    },
    'let down': {
        feelings: ['disappointed', 'frustrated', 'hurt', 'sad'],
        needs: ['consideration', 'support', 'trust']
    },
    'manipulated': {
        feelings: ['angry', 'confused', 'resentful'],
        needs: ['autonomy', 'clarity', 'respect', 'trust']
    },
    'misunderstood': {
        feelings: ['disconnected', 'disappointed', 'frustrated', 'lonely'],
        needs: ['clarity', 'connection', 'understanding']
    },
    'neglected': {
        feelings: ['frustrated', 'hurt', 'lonely', 'sad'],
        needs: ['consideration', 'support', 'to matter']
    },
    'overworked': {
        feelings: ['exhausted', 'frustrated', 'overwhelmed', 'resentful'],
        needs: ['consideration', 'rest']
    },
    'patronized': {
        feelings: ['angry', 'frustrated'],
        needs: ['equality', 'respect']
    },
    'pressured': {
        feelings: ['anxious', 'overwhelmed', 'stressed', 'tense'],
        needs: ['autonomy', 'choice', 'consideration', 'ease', 'space']
    },
    'provoked': {
        feelings: ['angry', 'frustrated', 'irritated'],
        needs: ['consideration', 'respect', 'space']
    },
    'put down': {
        feelings: ['angry', 'embarrassed', 'hurt'],
        needs: ['appreciation', 'respect', 'support']
    },
    'rejected': {
        feelings: ['disappointed', 'hurt', 'lonely', 'sad', 'vulnerable'],
        needs: ['acceptance', 'appreciation', 'belonging', 'connection']
    },
    'taken for granted': {
        feelings: ['frustrated', 'hurt', 'resentful'],
        needs: ['appreciation', 'consideration', 'respect']
    },
    'threatened': {
        feelings: ['alarmed', 'anxious', 'scared', 'tense'],
        needs: ['safety', 'security']
    },
    'tricked': {
        feelings: ['angry', 'hurt'],
        needs: ['clarity', 'respect', 'trust']
    },
    'unappreciated': {
        feelings: ['frustrated', 'hurt', 'resentful', 'sad'],
        needs: ['appreciation', 'respect', 'to matter']
    },
    'unheard': {
        feelings: ['disconnected', 'disappointed', 'frustrated', 'lonely'],
        needs: ['connection', 'consideration', 'understanding']
    },
    'unseen': {
        feelings: ['disconnected', 'frustrated', 'lonely', 'sad'],
        needs: ['connection', 'to matter']
    },
    'unsupported': {
        feelings: ['frustrated', 'lonely', 'overwhelmed'],
        needs: ['connection', 'support']
    },
    'unwanted': {
        feelings: ['hurt', 'lonely', 'sad'],
        needs: ['acceptance', 'belonging', 'connection', 'love']
    },
    'used': {
        feelings: ['angry', 'frustrated', 'hurt', 'resentful'],
        needs: ['appreciation', 'consideration', 'mutuality', 'respect']
    },
    'victimized': {
        feelings: ['angry', 'helpless', 'hurt', 'scared'],
        needs: ['autonomy', 'respect', 'safety']
    },
    'violated': {
        feelings: ['angry', 'hurt'],
        needs: ['integrity', 'respect', 'safety']
    }
};
