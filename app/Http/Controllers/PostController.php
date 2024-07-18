<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::latest()->get();

        // Debug log untuk memastikan data dikirim
        logger()->info('Posts data:', ['posts' => $posts]);

        return inertia('Posts/Index', [
            'posts' => $posts,
            'session' => session()->all()
        ]);
    }

    // Metode lain seperti create, store, show, edit, update, destroy dapat ditambahkan di sini
}
