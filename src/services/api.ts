import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  description: string;
  flightDetails: {
    from: string;
    to: string;
    duration: string;
    price: number;
  };
  activities: Activity[];
}

export interface Activity {
  id: string;
  title: string;
  location: string;
  time: string;
  duration: string;
  price: number;
  image?: string;
}

export interface UserData {
  name: string;
  destination: string;
  duration: string;
  travelType: string;
}

const api = {
  async getDestinations(): Promise<Destination[]> {
    const response = await axios.get(`${API_BASE_URL}/destinations`);
    return response.data;
  },

  async getActivities(destinationId: string): Promise<Activity[]> {
    const response = await axios.get(`${API_BASE_URL}/activities/${destinationId}`);
    return response.data;
  },

  saveUserData(data: UserData): void {
    localStorage.setItem('userData', JSON.stringify(data));
  },

  getUserData(): UserData | null {
    const data = localStorage.getItem('userData');
    return data ? JSON.parse(data) : null;
  }
};

export default api; 