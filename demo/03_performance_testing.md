!SLIDE

# Finally

!SLIDE

## Performance testing!

!SLIDE

<video width="936" height="585" preload="auto">
  <source src="file/videos/9_test_profile.ogg" type="video/ogg">
  <source src="file/videos/9_test_profile.mp4" type="video/mp4">
</video>

!SLIDE

## HTML stack = ♥

!SLIDE

## Spot the issue

!SLIDE

<video width="936" height="585" preload="auto">
  <source src="file/videos/10_spot_the_issue.ogg" type="video/ogg">
  <source src="file/videos/10_spot_the_issue.mp4" type="video/mp4">
</video>

!SLIDE

## Let's fix this!

!SLIDE

<video width="936" height="585" preload="auto">
  <source src="file/videos/11_new_profiling.ogg" type="video/ogg">
  <source src="file/videos/11_new_profiling.mp4" type="video/mp4">
</video>

!SLIDE

## <span class="highlight">~5%</span> less allocated objects

!SLIDE

## <span class="highlight">~15%</span> less time

!SLIDE

## <span class="highlight">9</span> characters!

!SLIDE

# Real Talk™

!SLIDE center

## Real Talk

<img src="/file/images/railscasts_pullrequest.png"/>

!SLIDE

# One more example

!SLIDE

## Homepage

!SLIDE

## Homepage

    @@@ ruby
    require 'test_helper'
    require 'rails/performance_test_help'

    class EpisodeTest < ActionDispatch::PerformanceTest
      # Refer to the documentation for all available options
      # self.profile_options = { :runs => 5, 
      #                          :metrics => [:wall_time, :memory]
      #                          :output => 'tmp/performance',
      #                          :formats => [:flat] }

      def test_homepage
        get '/'
      end
    end

!SLIDE

### `rake test:profile`

!SLIDE

    @@@ ruby
    EpisodeTest#test_homepage (473 ms warmup)
            process_time: 531 ms
                  memory: 27 KB
                 objects: 343,450

!SLIDE center

### HTML Stack

<img src="/file/images/link_to_stack.png"/>

!SLIDE

### `link_to name, link` 
### →
### `<a href="link">name</a>`

!SLIDE

    @@@ ruby
    EpisodeTest#test_homepage (438 ms warmup)
            process_time: 469 ms
                  memory: 25 KB
                 objects: 319,660

!SLIDE

## <span class="highlight">~7%</span> less allocated objects

!SLIDE

## <span class="highlight">~12%</span> less time

!SLIDE

## <span class="highlight">3</span> `link_to` calls!

!SLIDE

### However

!SLIDE

### Less readability

!SLIDE

### Is it worth it?

!SLIDE

# Comparing interpreters

!SLIDE

## `rake test:benchmark`

!SLIDE

## MRI (1.9.2-p290)

    @@@ ruby
    EpisodeTest#test_homepage (506 ms warmup)
               wall_time: 164 ms
                  memory: 10 MB
                 objects: 122,823
                 gc_runs: 0
                 gc_time: 0 ms

!SLIDE

## JRuby (1.6.5 on Java 6)

    @@@ ruby
    $ rvm jruby

    @@@ ruby
    EpisodeTest#test_homepage (951 ms warmup)
               wall_time: 122 ms
               user_time: 110 ms
                  memory: 11 MB
                 gc_runs: 0
                 gc_time: 0 ms

!SLIDE

## JRuby (1.6.5 on Java 6)

    @@@ ruby
    $ rvm rbx

    @@@ ruby
    !SLIDE

    ## Rubinius (2.0.0dev)
    EpisodeTest#test_homepage (753 ms warmup)
               wall_time: 163 ms
                  memory: 11 MB
                 objects: 114,363
                 gc_runs: 0
                 gc_time: 0 ms
!SLIDE

# ♥ JRuby 1.7 on Java 1.7 ♥
