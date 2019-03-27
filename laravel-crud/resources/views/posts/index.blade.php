@extends('layouts.main')

@section('title')
  All my posts
@endsection

@section('sidebar')
  This is the side menu
@endsection

@section('content')

  @foreach ($posts as $post)
    <a href="/posts/{{ $post->id }}">
      <h1>{{ $post->title }}</h1>
      <h3>{{ $post->category->name}}</h3>
    </a>
    <h6>Total views: {{ $post->total() }}</h6>
    <p>{{ $post->content }}</p>

    <hr>
  @endforeach

@endsection
