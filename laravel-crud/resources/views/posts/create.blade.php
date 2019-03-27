@extends('layouts.main')

@section('title')
  All my posts
@endsection

@section('sidebar')
  This is the side menu
@endsection

@section('content')
  <form action="/laravel-crud/public/posts" method="POST">
    {{ csrf_field() }}
    <h1>Create a post</h1>
    <hr>
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="title" placeholder="Enter title" name="title">
    </div>
    <div class="form-group">
      <label for="content">Content</label>
      <textarea class="form-control" id="content" placeholder="Content" name="content"></textarea>
    </div>
    <div class="form-group">
      <label for="content">Category</label>
      <select class="form-control" name="category_id">
        @foreach ($categories as $category)
            <option value="{{ $category->id }}">{{ $category->name }}</option>
        @endforeach
      </select>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
@endsection
