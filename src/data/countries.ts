import { Feature } from 'geojson';

export interface Country {
  value: string;
  label: string;
  coordinates: [number, number];
  zoom: number;
}

// This is a comprehensive list of major countries with their coordinates and appropriate zoom levels
export const countries: Country[] = [
  { value: 'Afghanistan', label: 'Afghanistan', coordinates: [67, 33], zoom: 4 },
  { value: 'Albania', label: 'Albania', coordinates: [20, 41], zoom: 6 },
  { value: 'Algeria', label: 'Algeria', coordinates: [3, 28], zoom: 4 },
  { value: 'Angola', label: 'Angola', coordinates: [18, -12.5], zoom: 4 },
  { value: 'Argentina', label: 'Argentina', coordinates: [-64, -34], zoom: 3.5 },
  { value: 'Australia', label: 'Australia', coordinates: [133, -25], zoom: 3 },
  { value: 'Austria', label: 'Austria', coordinates: [13.33, 47.33], zoom: 6 },
  { value: 'Bangladesh', label: 'Bangladesh', coordinates: [90, 24], zoom: 5 },
  { value: 'Belgium', label: 'Belgium', coordinates: [4.5, 50.83], zoom: 6 },
  { value: 'Bolivia', label: 'Bolivia', coordinates: [-65, -17], zoom: 4 },
  { value: 'Brazil', label: 'Brazil', coordinates: [-55, -10], zoom: 3 },
  { value: 'Bulgaria', label: 'Bulgaria', coordinates: [25.5, 42.75], zoom: 6 },
  { value: 'Cambodia', label: 'Cambodia', coordinates: [105, 13], zoom: 5 },
  { value: 'Cameroon', label: 'Cameroon', coordinates: [12, 6], zoom: 5 },
  { value: 'Canada', label: 'Canada', coordinates: [-95, 60], zoom: 3 },
  { value: 'Chile', label: 'Chile', coordinates: [-71, -30], zoom: 3 },
  { value: 'China', label: 'China', coordinates: [105, 35], zoom: 3 },
  { value: 'Colombia', label: 'Colombia', coordinates: [-72, 4], zoom: 4 },
  { value: 'Costa Rica', label: 'Costa Rica', coordinates: [-84, 10], zoom: 6 },
  { value: 'Croatia', label: 'Croatia', coordinates: [15.5, 45.17], zoom: 6 },
  { value: 'Cuba', label: 'Cuba', coordinates: [-77.5, 21.5], zoom: 6 },
  { value: 'Czech Republic', label: 'Czech Republic', coordinates: [15.5, 49.75], zoom: 6 },
  { value: 'Denmark', label: 'Denmark', coordinates: [10, 56], zoom: 6 },
  { value: 'Ecuador', label: 'Ecuador', coordinates: [-77.5, -2], zoom: 5 },
  { value: 'Egypt', label: 'Egypt', coordinates: [30, 27], zoom: 4 },
  { value: 'Ethiopia', label: 'Ethiopia', coordinates: [38, 8], zoom: 4 },
  { value: 'Finland', label: 'Finland', coordinates: [26, 64], zoom: 4 },
  { value: 'France', label: 'France', coordinates: [2, 47], zoom: 5 },
  { value: 'Germany', label: 'Germany', coordinates: [10, 51], zoom: 5 },
  { value: 'Greece', label: 'Greece', coordinates: [22, 39], zoom: 5 },
  { value: 'Guatemala', label: 'Guatemala', coordinates: [-90.25, 15.5], zoom: 6 },
  { value: 'Honduras', label: 'Honduras', coordinates: [-86.5, 15], zoom: 6 },
  { value: 'Hungary', label: 'Hungary', coordinates: [20, 47], zoom: 6 },
  { value: 'Iceland', label: 'Iceland', coordinates: [-18, 65], zoom: 5 },
  { value: 'India', label: 'India', coordinates: [78, 21], zoom: 3.5 },
  { value: 'Indonesia', label: 'Indonesia', coordinates: [120, -5], zoom: 3 },
  { value: 'Iran', label: 'Iran', coordinates: [53, 32], zoom: 4 },
  { value: 'Iraq', label: 'Iraq', coordinates: [44, 33], zoom: 5 },
  { value: 'Ireland', label: 'Ireland', coordinates: [-8, 53], zoom: 5 },
  { value: 'Israel', label: 'Israel', coordinates: [34.75, 31.5], zoom: 6 },
  { value: 'Italy', label: 'Italy', coordinates: [12.83, 42.83], zoom: 5 },
  { value: 'Jamaica', label: 'Jamaica', coordinates: [-77.5, 18.25], zoom: 7 },
  { value: 'Japan', label: 'Japan', coordinates: [138, 38], zoom: 4 },
  { value: 'Jordan', label: 'Jordan', coordinates: [36, 31], zoom: 6 },
  { value: 'Kazakhstan', label: 'Kazakhstan', coordinates: [68, 48], zoom: 3 },
  { value: 'Kenya', label: 'Kenya', coordinates: [38, 1], zoom: 5 },
  { value: 'Kuwait', label: 'Kuwait', coordinates: [47.5, 29.5], zoom: 7 },
  { value: 'Lebanon', label: 'Lebanon', coordinates: [35.83, 33.83], zoom: 7 },
  { value: 'Libya', label: 'Libya', coordinates: [17, 27], zoom: 4 },
  { value: 'Madagascar', label: 'Madagascar', coordinates: [47, -20], zoom: 4 },
  { value: 'Malaysia', label: 'Malaysia', coordinates: [112.5, 2.5], zoom: 4 },
  { value: 'Mexico', label: 'Mexico', coordinates: [-102, 23], zoom: 4 },
  { value: 'Mongolia', label: 'Mongolia', coordinates: [105, 46], zoom: 4 },
  { value: 'Morocco', label: 'Morocco', coordinates: [-5, 32], zoom: 5 },
  { value: 'Myanmar', label: 'Myanmar', coordinates: [98, 22], zoom: 4 },
  { value: 'Nepal', label: 'Nepal', coordinates: [84, 28], zoom: 6 },
  { value: 'Netherlands', label: 'Netherlands', coordinates: [5.75, 52.5], zoom: 6 },
  { value: 'New Zealand', label: 'New Zealand', coordinates: [174, -41], zoom: 4 },
  { value: 'Nigeria', label: 'Nigeria', coordinates: [8, 10], zoom: 4 },
  { value: 'North Korea', label: 'North Korea', coordinates: [127, 40], zoom: 5 },
  { value: 'Norway', label: 'Norway', coordinates: [10, 62], zoom: 4 },
  { value: 'Oman', label: 'Oman', coordinates: [57, 21], zoom: 5 },
  { value: 'Pakistan', label: 'Pakistan', coordinates: [70, 30], zoom: 4 },
  { value: 'Panama', label: 'Panama', coordinates: [-80, 9], zoom: 6 },
  { value: 'Paraguay', label: 'Paraguay', coordinates: [-58, -23], zoom: 5 },
  { value: 'Peru', label: 'Peru', coordinates: [-76, -10], zoom: 4 },
  { value: 'Philippines', label: 'Philippines', coordinates: [122, 13], zoom: 4 },
  { value: 'Poland', label: 'Poland', coordinates: [20, 52], zoom: 5 },
  { value: 'Portugal', label: 'Portugal', coordinates: [-8, 39.5], zoom: 5 },
  { value: 'Qatar', label: 'Qatar', coordinates: [51.25, 25.5], zoom: 7 },
  { value: 'Romania', label: 'Romania', coordinates: [25, 46], zoom: 5 },
  { value: 'Russia', label: 'Russia', coordinates: [100, 60], zoom: 2.5 },
  { value: 'Saudi Arabia', label: 'Saudi Arabia', coordinates: [45, 25], zoom: 4 },
  { value: 'Senegal', label: 'Senegal', coordinates: [-14, 14], zoom: 5 },
  { value: 'Serbia', label: 'Serbia', coordinates: [21, 44], zoom: 6 },
  { value: 'Singapore', label: 'Singapore', coordinates: [103.8, 1.37], zoom: 8 },
  { value: 'Slovakia', label: 'Slovakia', coordinates: [19.5, 48.67], zoom: 6 },
  { value: 'Somalia', label: 'Somalia', coordinates: [46, 6], zoom: 5 },
  { value: 'South Africa', label: 'South Africa', coordinates: [24, -29], zoom: 4 },
  { value: 'South Korea', label: 'South Korea', coordinates: [127.5, 37], zoom: 6 },
  { value: 'Spain', label: 'Spain', coordinates: [-4, 40], zoom: 5 },
  { value: 'Sri Lanka', label: 'Sri Lanka', coordinates: [81, 7], zoom: 6 },
  { value: 'Sudan', label: 'Sudan', coordinates: [30, 15], zoom: 4 },
  { value: 'Sweden', label: 'Sweden', coordinates: [15, 62], zoom: 4 },
  { value: 'Switzerland', label: 'Switzerland', coordinates: [8, 47], zoom: 6 },
  { value: 'Syria', label: 'Syria', coordinates: [38, 35], zoom: 5 },
  { value: 'Taiwan', label: 'Taiwan', coordinates: [121, 24], zoom: 6 },
  { value: 'Tanzania', label: 'Tanzania', coordinates: [35, -6], zoom: 5 },
  { value: 'Thailand', label: 'Thailand', coordinates: [100, 15], zoom: 4 },
  { value: 'Tunisia', label: 'Tunisia', coordinates: [9, 34], zoom: 5 },
  { value: 'Turkey', label: 'Turkey', coordinates: [35, 39], zoom: 4 },
  { value: 'Uganda', label: 'Uganda', coordinates: [32, 1], zoom: 5 },
  { value: 'Ukraine', label: 'Ukraine', coordinates: [32, 49], zoom: 4 },
  { value: 'United Arab Emirates', label: 'United Arab Emirates', coordinates: [54, 24], zoom: 6 },
  { value: 'United Kingdom', label: 'United Kingdom', coordinates: [-2, 54], zoom: 5 },
  { value: 'United States', label: 'United States', coordinates: [-98, 39.5], zoom: 3.5 },
  { value: 'Uruguay', label: 'Uruguay', coordinates: [-56, -33], zoom: 5 },
  { value: 'Uzbekistan', label: 'Uzbekistan', coordinates: [64, 41], zoom: 4 },
  { value: 'Venezuela', label: 'Venezuela', coordinates: [-66, 8], zoom: 5 },
  { value: 'Vietnam', label: 'Vietnam', coordinates: [106, 16], zoom: 4 },
  { value: 'Yemen', label: 'Yemen', coordinates: [48, 15], zoom: 5 },
  { value: 'Zambia', label: 'Zambia', coordinates: [28, -15], zoom: 5 },
  { value: 'Zimbabwe', label: 'Zimbabwe', coordinates: [30, -19], zoom: 5 },
];