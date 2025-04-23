import { ProgramItem, Speaker, NewsItem, Video, Material } from '../types';

// Mock data for program items
export const programItems: ProgramItem[] = [
  // Day 1 - May 29, 2025
  {
    id: 'day1-registration',
    title: 'Registration',
    date: '2025-05-29',
    time: '11:30 - 12:00',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Registration and welcome for congress participants.'
  },
  {
    id: 'day1-opening',
    title: 'Opening Ceremony',
    date: '2025-05-29',
    time: '12:00 - 12:15',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Official opening of the congress.'
  },
  {
    id: 'day1-session1',
    title: 'Rotator Cuff Mini Battle Session',
    date: '2025-05-29',
    time: '12:15 - 12:55',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Moderator: Dr. Medenica\n\n• Clinic tips\n   Dr. Alonso vs. Dr. Statson\n\n• Radiology tips\n   Dr. Jelić vs. Dr. Marra\n\n• Partial tears tips\n   Dr. Jain vs. Dr. Ersen\n\n• Full thickness tears tips\n   Dr. Poberaj vs. Dr. Bilsel\n\n• Conclusion\n   Dr. Medenica'
  },
  {
    id: 'day1-surgery1',
    title: 'RE-LIVE Surgery: Arthroscopic Transosseous Rotator Cuff Repair',
    date: '2025-05-29',
    time: '13:00 - 14:30',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Moderators: Dr. Diklić & Justin Anderson\n\nArthroscopic Transosseous Rotator Cuff Repair and Biceps Tenodesis: Interactive Play with Experts (Beach chair + Lateral)\n\nSurgeons:\n• Dr. Sanders\n• Justin Anderson'
  },
  {
    id: 'day1-lunch',
    title: 'Light Lunch Break',
    date: '2025-05-29',
    time: '15:00 - 15:30',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Networking lunch break for all participants.'
  },
  {
    id: 'day1-session2',
    title: 'Rotator Cuff: Serbia & Region',
    date: '2025-05-29',
    time: '15:30 - 16:10',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Moderator: Dr. Novak Jovanović\n\n• Rotator cuff in my practice\n   Dr. Stevanović\n\n• Regional perspectives:\n   - Dr. Jovanović\n   - Dr. Ninković\n   - Dr. Kovačič\n   - Dr. Matek\n   - Dr. Bećirbegović\n   - Dr. Petkov\n   - Dr. Dubljanin-Raspopović\n\n• Conclusion\n   Dr. Jovanović'
  },
  {
    id: 'day1-session3',
    title: 'Interactive Case Discussions',
    date: '2025-05-29',
    time: '16:15 - 17:00',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Moderator: Dr. Stevanović\n\nTopics:\n• Young active and cuff injury\n• Subscapularis tear\n• Orthobiology\n\nPanelists:\n• Dr. Statson\n• Dr. Poberaj\n• Dr. Ersen'
  },
  {
    id: 'day1-coffee',
    title: 'Coffee Break',
    date: '2025-05-29',
    time: '17:00 - 17:15',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Networking break for all participants.'
  },
  {
    id: 'day1-surgery2',
    title: 'LIVE Surgery: Full Thickness Double Row Rotator Cuff Reconstruction',
    date: '2025-05-29',
    time: '17:15 - 18:15',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Moderator: Dr. Jovanović\n\nSurgeons:\n• Dr. Alonso\n• Dr. Colić'
  },
  {
    id: 'day1-session4',
    title: 'Interactive Case Discussion',
    date: '2025-05-29',
    time: '18:15 - 18:45',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Moderator: Dr. Stevanović\n\nTopics:\n• LHB\n• Partial Repair\n• Tendon Transfer\n• Augmentation\n\nPanelists:\n• Dr. Marra\n• Dr. Jain\n• Dr. Bilsel'
  },
  {
    id: 'day1-closing',
    title: 'End of Day 1',
    date: '2025-05-29',
    time: '18:45 - 19:00',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Closing remarks by Dr. Medenica'
  },

  // Day 2 - May 30, 2025
  {
    id: 'day2-registration',
    title: 'Registration',
    date: '2025-05-30',
    time: '08:30 - 09:00',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Registration and welcome for day two participants.'
  },
  {
    id: 'day2-session1',
    title: 'TFCC Disorders',
    date: '2025-05-30',
    time: '09:00 - 09:45',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Moderator: Dr. Palibrk\n\n• Anatomy and evaluation\n   Dr. Glišović\n\n• Nonoperative Treatment\n   Dr. Vranješ\n\n• Open Surgery\n   Dr. Palibrk\n\n• Arthroscopic Surgery: First Year in Serbia\n   Dr. Vučetić\n\n• Arthroscopic Surgery: Tips and Tricks\n   Dr. Jotanović'
  },
  {
    id: 'day2-surgery1',
    title: 'RE-LIVE Surgery: TFCC',
    date: '2025-05-30',
    time: '10:00 - 10:30',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Moderator: Dr. Jotanović\n\nVideo presentation on preparation, instrumentation, and technique with discussion by Dr. Jotanović'
  },
  {
    id: 'day2-coffee1',
    title: 'Coffee Break',
    date: '2025-05-30',
    time: '10:30 - 11:00',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Networking break for all participants.'
  },
  {
    id: 'day2-session2',
    title: 'Elbow Instability',
    date: '2025-05-30',
    time: '11:00 - 11:30',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Moderator: Dr. Micić\n\n• Rotterdam to Serbia\n   Denise Eygendaal & Dr. Colić\n\n• Basel to Serbia\n   Claudio Rosso & Dr. Aleksić\n\n• Wrightington to Serbia\n   Adam Watts & Dr. Stanojcic\n\n• SECEC President video\n   Roger Van Riet & Dr. Micić'
  },
  {
    id: 'day2-session3',
    title: 'Distal Biceps',
    date: '2025-05-30',
    time: '11:45 - 12:30',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Moderator: Dr. Obradović\n\n• From normal function to rupture\n   Dr. Daković\n\n• One vs two incision repair\n   Dr. Marra\n\n• Do we operate all and why\n   Dr. Obradović\n\n• Distal Biceps Repair and Reconstruction: Top Tips and Outcomes\n   Dr. Jain'
  },
  {
    id: 'day2-sponsors',
    title: 'Sponsors & Support Session',
    date: '2025-05-30',
    time: '12:30 - 13:30',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Support the sponsors - all participants'
  },
  {
    id: 'day2-lunch',
    title: 'Lunch Break',
    date: '2025-05-30',
    time: '13:30 - 14:30',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Networking lunch break for all participants.'
  },
  {
    id: 'day2-session4',
    title: 'Proximal Humerus Fracture - Pros & Cons',
    date: '2025-05-30',
    time: '14:30 - 15:20',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Moderator: Dr. Ninković\n\n• Nonoperative treatment\n   Dr. Colić & Dr. Marra\n\n• Plate fixation\n   Dr. Obradović & Dr. Bilsel\n\n• Nail fixation\n   Dr. Jevtić & Dr. Ersen\n\n• Hemiarthroplasty\n   Dr. Ninković & Dr. Poberaj\n\n• Reverse arthroplasty\n   Dr. Jovanović & Dr. Alonso\n\n• Discussion\n   All panelists'
  },
  {
    id: 'day2-surgery2',
    title: 'RE-LIVE Surgery: Proximal Humerus Fracture',
    date: '2025-05-30',
    time: '15:30 - 17:00',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Moderators: Dr. Diklić & Dr. Medenica\n\nFrom implantless to reverse arthroplasty\n\nSurgeons:\n• Dr. Stevanović\n• Dr. Glišić'
  },
  {
    id: 'day2-coffee2',
    title: 'Coffee Break',
    date: '2025-05-30',
    time: '17:00 - 17:15',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Afternoon networking break.'
  },
  {
    id: 'day2-session5',
    title: 'Interactive Case Discussion',
    date: '2025-05-30',
    time: '17:15 - 18:00',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Moderator: Dr. Jovanović\n\n• Infection\n   Case by Dr. Daković\n\n• Young with chronic trauma\n   Case by Dr. Colić\n\n• Chronic dislocation\n   Case by Dr. Glišić\n\nPanelists:\n• Dr. Marra\n• Dr. Statson\n• Dr. Jain\n• Dr. Poberaj\n• Dr. Alonso\n• Dr. Bilsel\n• Dr. Ersen'
  },
  {
    id: 'day2-session6',
    title: 'Resident / Physio Corner',
    date: '2025-05-30',
    time: '18:00 - 18:45',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Moderator: Dr. Stevanović\n\nOpen for applications'
  },
  {
    id: 'day2-closing',
    title: 'End of Symposium',
    date: '2025-05-30',
    time: '19:00',
    location: 'Hotel Mona Plaza, Belgrade',
    description: 'Closing remarks by Dr. Jovanović'
  }
];

export const speakers: Speaker[] = [
  // United States
  {
    id: 'marra',
    name: 'Guido Marra',
    title: '',
    institution: 'Northwestern University Feinberg School of Medicine',
    country: 'United States',
    countryCode: 'US',
    bio: 'Professor of Orthopaedic Surgery at Northwestern University Feinberg School of Medicine and the Director of Shoulder and Elbow Surgery in the Department of Orthopaedic Surgery.',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  {
    id: 'stetson',
    name: 'William Stetson',
    title: '',
    institution: 'USA Volleyball',
    country: 'United States',
    countryCode: 'US',
    bio: 'Award-winning orthopaedic surgeon who is double board certified in orthopaedic surgery and sports medicine. He is the Olympic Team Doctor for the USA Men\'s and Women\'s Indoor Volleyball Teams and an expert in complex joint reconstruction.',
    imageUrl: '',
    topics: ['Sports Medicine', 'Joint Reconstruction']
  },
  {
    id: 'sanders',
    name: 'Brett Sanders',
    title: '',
    institution: 'Harvard Medical School',
    country: 'United States',
    countryCode: 'US',
    bio: 'Fellowship-trained at Harvard and the Royal Infirmary of Edinburgh, specializing in regenerative medicine and joint preservation. Certified by the American Board of Regenerative Medicine.',
    imageUrl: '',
    topics: ['Regenerative Medicine', 'Joint Preservation']
  },
  {
    id: 'anderson',
    name: 'Justin Anderson',
    title: '',
    institution: 'Medical Device Company',
    country: 'United States',
    countryCode: 'US',
    bio: 'CEO and President of a global medical device company known for "anchorless" arthroscopic transosseous rotator cuff repair.',
    imageUrl: '',
    topics: ['Medical Devices', 'Rotator Cuff Repair']
  },
  
  // Portugal
  {
    id: 'alonso',
    name: 'Raul Alonso',
    title: '',
    institution: 'Hospital da Luz',
    country: 'Portugal',
    countryCode: 'PT',
    bio: 'Orthopaedist at Hospital da Luz in Lisbon, specialized in arthroscopic and reconstructive surgery of the shoulder and elbow, with a focus on degenerative and sports injuries.',
    imageUrl: '',
    topics: ['Arthroscopic Surgery', 'Sports Injuries']
  },
  
  // United Kingdom
  {
    id: 'jain',
    name: 'Neil Jain',
    title: '',
    institution: 'University of Salford',
    country: 'United Kingdom',
    countryCode: 'GB',
    bio: 'Fellowship-trained in Canada, Mr. Jain is an honorary senior lecturer at the University of Salford with extensive experience in arthroscopic surgery and sports injuries.',
    imageUrl: '',
    topics: ['Arthroscopic Surgery', 'Sports Medicine']
  },
  
  // Turkey
  {
    id: 'bilsel',
    name: 'Kerem Bilsel',
    title: '',
    institution: 'University of Istanbul',
    country: 'Turkey',
    countryCode: 'TR',
    bio: 'Specialist in shoulder and elbow surgery, trained at the University of Istanbul.',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  {
    id: 'ersen',
    name: 'Ali Ersen',
    title: '',
    institution: 'University of Istanbul',
    country: 'Turkey',
    countryCode: 'TR',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  
  // Slovenia
  {
    id: 'poberaj',
    name: 'Boris Poberaj',
    title: '',
    institution: 'Aspetar',
    country: 'Slovenia',
    countryCode: 'SI',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  {
    id: 'kovacic',
    name: 'Ladislav Kovačić',
    title: '',
    institution: '',
    country: 'Slovenia',
    countryCode: 'SI',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  
  // Croatia
  {
    id: 'jotanovic',
    name: 'Zdravko Jotanović',
    title: '',
    institution: '',
    country: 'Croatia',
    countryCode: 'HR',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  {
    id: 'matek',
    name: 'Danijel Matek',
    title: '',
    institution: '',
    country: 'Croatia',
    countryCode: 'HR',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  
  // Bosnia and Herzegovina
  {
    id: 'becirbegovic',
    name: 'Semin Bećirbegović',
    title: '',
    institution: '',
    country: 'Bosnia and Herzegovina',
    countryCode: 'BA',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  
  // North Macedonia
  {
    id: 'petkov',
    name: 'Nenad Petkov',
    title: '',
    institution: '',
    country: 'North Macedonia',
    countryCode: 'MK',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  
  // Serbia
  {
    id: 'ninkovic',
    name: 'Srđan Ninković',
    title: '',
    institution: '',
    country: 'Serbia',
    countryCode: 'RS',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  {
    id: 'jovanovic',
    name: 'Novak Jovanović',
    title: '',
    institution: '',
    country: 'Serbia',
    countryCode: 'RS',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  {
    id: 'glisovic',
    name: 'Ivana Glišović Jovanović',
    title: '',
    institution: '',
    country: 'Serbia',
    countryCode: 'RS',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  {
    id: 'palibrk',
    name: 'Tomislav Palibrk',
    title: '',
    institution: '',
    country: 'Serbia',
    countryCode: 'RS',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  {
    id: 'diklic',
    name: 'Ivan Diklić',
    title: '',
    institution: '',
    country: 'Serbia',
    countryCode: 'RS',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  {
    id: 'micic',
    name: 'Ivan Micić',
    title: '',
    institution: '',
    country: 'Serbia',
    countryCode: 'RS',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  {
    id: 'jevtic',
    name: 'Aleksandar Jevtić',
    title: '',
    institution: '',
    country: 'Serbia',
    countryCode: 'RS',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  {
    id: 'dakovic',
    name: 'Ljubomir Daković',
    title: '',
    institution: '',
    country: 'Serbia',
    countryCode: 'RS',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  {
    id: 'stevanovic',
    name: 'Vladan Stevanović',
    title: '',
    institution: '',
    country: 'Serbia',
    countryCode: 'RS',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  {
    id: 'obradovic',
    name: 'Mirko Obradović',
    title: '',
    institution: '',
    country: 'Serbia',
    countryCode: 'RS',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  {
    id: 'dubljanin',
    name: 'Emilija Dubljanin Raspopović',
    title: '',
    institution: '',
    country: 'Serbia',
    countryCode: 'RS',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  {
    id: 'colic',
    name: 'Nikola Colić',
    title: '',
    institution: '',
    country: 'Serbia',
    countryCode: 'RS',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  {
    id: 'medenica',
    name: 'Ivica Medenica',
    title: '',
    institution: '',
    country: 'Serbia',
    countryCode: 'RS',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  {
    id: 'vucetic',
    name: 'Marko Vučetić',
    title: '',
    institution: '',
    country: 'Serbia',
    countryCode: 'RS',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  {
    id: 'glisic',
    name: 'Miodrag Glišić',
    title: '',
    institution: '',
    country: 'Serbia',
    countryCode: 'RS',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  },
  {
    id: 'stanojcic',
    name: 'Tomislav Stanojčić',
    title: '',
    institution: '',
    country: 'Serbia',
    countryCode: 'RS',
    bio: '',
    imageUrl: '',
    topics: ['Shoulder Surgery', 'Elbow Surgery']
  }
];

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Welcome to the 15th Shoulder and Elbow Society of Serbia Congress!',
    date: '2025-04-29',
    content: `Dear colleagues and guests,

Welcome to the official mobile app of the Shoulder and Elbow Society of Serbia. This year's 15th International Congress, held on May 29–30, 2025, at the Mona Plaza Hotel in Belgrade, brings together a distinguished group of regional and international experts in the field of shoulder and elbow surgery.

📚 Over two full days of scientific programming, participants will have access to:
• Live and Re-live surgeries performed by leading surgeons
• Interactive case discussions with renowned panelists
• Focused sessions on rotator cuff pathology, elbow instability, distal biceps repair, and TFCC disorders
• A comprehensive debate on proximal humerus fracture treatment
• A dedicated Resident & Physio Corner, open for contributions

🌍 Our faculty includes some of the most respected names in orthopaedic surgery from USA, UK, Portugal, Turkey, Slovenia, Croatia, Bosnia and Herzegovina, North Macedonia, and of course Serbia.

📹 Don't miss our live-streamed sessions, educational video archives, and expert tips and tricks from every corner of the orthopedic world.

🗓️ For full details, visit the Program section.
👨‍⚕️ Want to know more about our speakers? Visit the Speakers page.
📥 Lecture videos and scientific materials will be available after the event in the Media and Resources sections.

We hope you enjoy the congress and make the most of the networking, knowledge, and innovation this platform has to offer.

Warm regards,
Organizing Committee
Shoulder and Elbow Society of Serbia`,
    imageUrl: 'https://images.pexels.com/photos/8460467/pexels-photo-8460467.jpeg',
    isHighlighted: true
  }
];

export const videos: Video[] = [];

export const materials: Material[] = [];