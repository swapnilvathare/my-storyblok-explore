export default function handler(req, res) {
  // Tailwind's default padding scale
  const padding = {
    'p-0': '0px',
    'p-0.5': '2px',
    'p-1': '4px',
    'p-1.5': '6px',
    'p-2': '8px',
    'p-2.5': '10px',
    'p-3': '12px',
    'p-3.5': '14px',
    'p-4': '16px',
    'p-5': '20px',
    'p-6': '24px',
    'p-7': '28px',
    'p-8': '32px',
    'p-9': '36px',
    'p-10': '40px',
    'p-11': '44px',
    'p-12': '48px',
    'p-14': '56px',
    'p-16': '64px',
    'p-20': '80px',
    'p-24': '96px',
    'p-28': '112px',
    'p-32': '128px',
    'p-36': '144px',
    'p-40': '160px',
    'p-44': '176px',
    'p-48': '192px',
    'p-52': '208px',
    'p-56': '224px',
    'p-60': '240px',
    'p-64': '256px',
    'p-72': '288px',
    'p-80': '320px',
    'p-96': '384px',
  };
  const options = Object.entries(padding).map(([key, value]) => ({
    value: key,
    name: `${key} (${value})`
  }));
  res.status(200).json(options);
}
