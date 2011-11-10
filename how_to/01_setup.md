!SLIDE

# How it works

!SLIDE

## Interpreter

!SLIDE

### ♥ JRuby, Rubinius, REE ♥

!SLIDE

### MRI

    @@@ ruby
    $ rvm install 1.9.2 --patch gcdata

!SLIDE

### MRI

    @@@ ruby
    $ rvm install 1.9.2 --patch gcdata --name perftest

!SLIDE

### RVM

    @@@ ruby
    $ rvm 1.9.2 # normal interpreter
<br/>
    @@@ ruby
    $ rvm 1.9.2-perftest # gcdata interpreter

!SLIDE

## Profiler

!SLIDE

### ♥ JRuby, Rubinius ♥

!SLIDE

### MRI, REE = RubyProf

!SLIDE

### MRI, REE = RubyProf

    @@@ ruby
    gem "ruby-prof"
<br/>
    @@@ ruby
    $ bundle install

!SLIDE

## Generating tests

!SLIDE

### Generator

    @@@ ruby
    $ rails generate performance_test user

!SLIDE

### Generator

    @@@ ruby
    require 'test_helper'
    require 'rails/performance_test_help'

    class UserTest < ActionDispatch::PerformanceTest
      # Refer to the documentation for all available options
      # self.profile_options = {:runs => 5,
      #                         :metrics => [:wall_time, :memory],
      #                         :output => 'tmp/performance',
      #                         :formats => [:flat] }

      def test_homepage
        get '/'
      end
    end

!SLIDE

### Generator

    @@@ ruby
    require 'test_helper'
    require 'rails/performance_test_help'

    class UserTest < ActionDispatch::PerformanceTest
      # Refer to the documentation for all available options
      # self.profile_options = {:runs => 5,
      #                         :metrics => [:wall_time, :memory],
      #                         :output => 'tmp/performance',
      #                         :formats => [:flat] }

      def test_homepage
        get '/'
      end

      def test_creation
        post '/users', {login: "goncalossilva", password: "123456789"} 
      end
    end
