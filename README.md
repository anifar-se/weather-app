# Weather App

A decoupled weather application built with a **Next.js** frontend and a **Laravel** backend. The app fetches real-time weather data from the [OpenWeatherMap API](https://openweathermap.org/api).

## Features

- **Frontend**: Built with Next.js and TypeScript, styled using Tailwind CSS with RippleUI components.
- **Backend**: Built with Laravel (API-only) to handle requests to the OpenWeatherMap API.
- Fetches weather data for a given city using the OpenWeatherMap API.
- Decoupled architecture for scalability and maintainability.

---

## Project Structure

```plaintext
weather-app/
├── frontend/       # Next.js frontend
├── backend/        # Laravel backend
└── README.md       # Project documentation
Here’s a sample `README.md` for your weather app project:

```markdown
# Weather App

A decoupled weather application built with a **Next.js** frontend and a **Laravel** backend. The app fetches real-time weather data from the [OpenWeatherMap API](https://openweathermap.org/api).

## Features

- **Frontend**: Built with Next.js and TypeScript, styled using Tailwind CSS with RippleUI components.
- **Backend**: Built with Laravel (API-only) to handle requests to the OpenWeatherMap API.
- Fetches weather data for a given city using the OpenWeatherMap API.
- Decoupled architecture for scalability and maintainability.

---

## Project Structure

```plaintext
weather-app/
├── frontend/       # Next.js frontend
├── backend/        # Laravel backend
└── README.md       # Project documentation
```

---

## Prerequisites

- **Node.js** (v16 or later)
- **Composer** (latest version)
- **PHP** (v8.1 or later)
- **MySQL** (or any database supported by Laravel)
- **OpenWeatherMap API Key** (Sign up for a free API key [here](https://openweathermap.org/api))

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2. Setup the Backend (Laravel)

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   composer install
   ```

3. Create a `.env` file:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your database credentials and OpenWeatherMap API key:
   ```plaintext
   DB_DATABASE=your_database_name
   DB_USERNAME=your_database_user
   DB_PASSWORD=your_database_password

   WEATHER_API_KEY=YOUR_OPENWEATHERMAP_API_KEY
   WEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather
   ```

5. Generate the application key:
   ```bash
   php artisan key:generate
   ```

6. Run database migrations:
   ```bash
   php artisan migrate
   ```

7. Start the Laravel development server:
   ```bash
   php artisan serve
   ```

### 3. Setup the Frontend (Next.js)

1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file and add the backend API URL:
   ```plaintext
   NEXT_PUBLIC_BACKEND_URL=http://localhost:8000/api
   ```

4. Start the Next.js development server:
   ```bash
   npm run dev
   ```

---

## Usage

1. Open your browser and navigate to the frontend URL:
   ```
   http://localhost:3000
   ```

2. Enter a city name to fetch the current weather data.

---

## Technologies Used

### Frontend
- **Next.js** (React Framework)
- **TypeScript**
- **Tailwind CSS** (with RippleUI components)

### Backend
- **Laravel** (API-only)
- **OpenWeatherMap API**

---

## Environment Variables

### Backend (`backend/.env`)
- `WEATHER_API_KEY`: Your OpenWeatherMap API key.
- `WEATHER_API_URL`: The base URL for the OpenWeatherMap API.

### Frontend (`frontend/.env.local`)
- `NEXT_PUBLIC_BACKEND_URL`: The URL of the Laravel backend API.

---

## Screenshots

Include screenshots of your app here (e.g., homepage, weather results).

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Feel free to fork this repository and submit pull requests. Contributions are welcome!

---

## Contact

For any questions or feedback, please contact:
- **Your Name**: bokeanifar@gmail.com
- **GitHub**: [https://github.com/your-username](https://github.com/your-username)
```

