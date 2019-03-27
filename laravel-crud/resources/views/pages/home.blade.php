@extends('layouts.main')

@section('title')
  All my posts
@endsection

@section('sidebar')
  This is the side menu
@endsection

@section('content')
  @if ($age > 20)
    Welcome back, {{ $user_name }} your age is still {{ $age }}
  @else
    Hey there young guy
  @endif
@endsection
