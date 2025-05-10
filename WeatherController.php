<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    private $apiKey;
    private $baseUrl;

    public function __construct()
    {
        $this->apiKey = config('weather.api_key');
        $this->baseUrl = config('weather.base_url');
    }

    public function getWeather(Request $request)
    {
        $city = $request->input('city', 'London'); // Default to London if no city is provided
        $url = "{$this->baseUrl}?q={$city}&appid={$this->apiKey}&units=metric";

        $response = Http::get($url);

        if ($response->successful()) {
            return response()->json($response->json());
        }

        return response()->json(['error' => 'Unable to fetch weather data'], 500);
    }
}