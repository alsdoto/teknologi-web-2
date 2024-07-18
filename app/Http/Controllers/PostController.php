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

    public function create ()
    {
        return inertia('Post/Create');
    }

    public function store()
    {

        // set validation
        $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);

        // create post
        Post::create([
            'title' => $request->title,
            'content' => $request->content
        ]);

        // redirect
        return redirect()->route('post.index')->with('succes', 'Data berhasil disimpan');
    }
}
