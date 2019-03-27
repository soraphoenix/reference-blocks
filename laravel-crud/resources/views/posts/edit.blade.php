@extends('layouts.main')

@section('title')
  All my posts
@endsection

@section('content')
  <form action="/laravel-crud/public/posts/{{ $post->id }}" method="POST">
    @method('PUT')
    {{ csrf_field() }}
    <h1>Edit post</h1>
    <hr>
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="title" placeholder="{{ $post->title }}" value="{{ $post->title }}" name="title">
    </div>
    <div class="form-group">
      <label for="content">Content</label>
      <textarea class="form-control" id="content" name="content">{{ $post->content }}</textarea>
    </div>
    <div class="form-group">
      <label for="content">Category</label>
      <select class="form-control" name="category_id">
        @foreach ($categories as $category)
          @if ($category->id == $post->category_id)
            <option value="{{ $category->id }}" selected>{{ $category->name }}</option>
          @else
            <option value="{{ $category->id }}">{{ $category->name }}</option>
          @endif
        @endforeach
      </select>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
@endsection
