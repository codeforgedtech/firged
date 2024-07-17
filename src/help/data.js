import munkisxAppIcon from '../assets/munkisxApp.png';
import bangolfAppIcon from '../assets/BangolfApp.png';
import budgetAppIcon from '../assets/budgetApp.png';

export const initialApps = [
    { 
        id: 1, 
        name: 'Munkisx Memory', 
        description: 'Munkisx offers an engaging memory game experience where the objective is not to match all pairs but to reach a specific score.', 
        date: '2023-01-01', 
        category: 'Game', 
        subcategory: 'Puzzle', 
        icon: munkisxAppIcon, 
        platforms: [
            { platform: 'android', downloadLink: 'https://android_download_link1' },
            { platform: 'ios', downloadLink: 'https://ios_download_link1' }
        ]
    },
    { 
        id: 2, 
        name: 'Bangolf Protokoll', 
        description: 'Bangolf Protocol is an app designed to simplify and enhance the experience of playing miniature golf (minigolf).', 
        date: '2023-02-01', 
        category: 'Utility', 
        subcategory: 'Tool', 
        icon: bangolfAppIcon, 
        platforms: [
            { platform: 'android', downloadLink: 'https://android_download_link2' },
            { platform: 'ios', downloadLink: 'https://ios_download_link2' }
        ]
    },
    { 
        id: 3, 
        name: 'BudgetApp', 
        description: 'The login system and budget-saving feature provide added security and long-term planning.', 
        date: '2023-02-01', 
        category: 'Utility', 
        subcategory: 'Finance', 
        icon: budgetAppIcon, 
        platforms: [
            { platform: 'android', downloadLink: 'https://android_download_link3' },
            { platform: 'ios', downloadLink: 'https://ios_download_link3' }
        ]
    }
];