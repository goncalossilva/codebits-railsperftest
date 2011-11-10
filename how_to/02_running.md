!SLIDE

## Running the tests

!SLIDE

### Benchmarking

    @@@ ruby
    $ rake test:benchmark

!SLIDE

### Benchmarking

    @@@ ruby
    UserTest#test_homepage (718 ms warmup)
               wall_time: 150 ms
                  memory: 7.8 MB
                 objects: 85,188
                 gc_runs: 0
                 gc_time: 0 ms
    
    UserTest#test_creation (179 ms warmup)
               wall_time: 176 ms
                  memory: 10 MB
                 objects: 122,823
                 gc_runs: 0
                 gc_time: 0 ms

!SLIDE

### Benchmarking

    @@@ ruby
    UserTest#test_homepage_gc_runs.csv
    UserTest#test_homepage_gc_time.csv
    UserTest#test_homepage_memory.csv
    UserTest#test_homepage_objects.csv
    UserTest#test_homepage_wall_time.csv
    UserTest#test_creation_gc_runs.csv
    UserTest#test_creation_gc_time.csv
    UserTest#test_creation_memory.csv
    UserTest#test_creation_objects.csv
    UserTest#test_creation_wall_time.csv

!SLIDE

#### Nifty charts and tables

!SLIDE

### Profiling

    @@@ ruby
    $ rake test:profile

!SLIDE

### Profiling

    @@@ ruby
    UserTest#test_homepage (694 ms warmup)
        process_time: 501 ms
              memory: 24 KB
             objects: 308,614
    
    UserTest#test_creation (161 ms warmup)
        process_time: 555 ms
              memory: 27 KB
             objects: 343,484

!SLIDE

### Profiling

    @@@ ruby
    UserTest#test_homepage_memory_flat.txt
    UserTest#test_homepage_memory_graph.html
    UserTest#test_homepage_memory_stack.html
    UserTest#test_homepage_memory_tree.txt
    UserTest#test_homepage_objects_flat.txt
    UserTest#test_homepage_objects_graph.html
    UserTest#test_homepage_objects_stack.html
    UserTest#test_homepage_objects_tree.txt
    UserTest#test_homepage_process_time_flat.txt
    UserTest#test_homepage_process_time_graph.html
    UserTest#test_homepage_process_time_stack.html
    UserTest#test_homepage_process_time_tree.txt

!SLIDE

#### Flat profiling report (text)

    @@@ ruby
    Thread ID: 70216239500940
    Total: 0.497691

     %self  total   self  wait  child  calls  name
      7.36   0.17   0.04  0.00   0.14   2945  Array#each
      5.66   0.03   0.03  0.00   0.00    168  Kernel#caller
      3.08   0.02   0.02  0.00   0.00   6747  String#gsub!
      2.91   0.02   0.01  0.00   0.00   3737  String#gsub
      2.30   0.07   0.01  0.00   0.06   2300  Array#map
      1.32   0.03   0.01  0.00   0.02    973  ERB::Util#html_escape

!SLIDE

#### Tree profiling report (text)

    @@@ ruby
    events: process_time

    fl=actionpack-3.1.1/lib/action_dispatch/testing/integration.rb
    fn=ActionDispatch::Integration::Runner#copy_session_variables!
    349 6
    cfl=actionpack-3.1.1/lib/action_dispatch/testing/integration.rb
    cfn=ActionDispatch::Integration::Runner#integration_session
    calls=1 350
    350 3
    cfl=/Users/goncalosilva/Code/railscasts/ruby_runtime
    cfn=Array#each
    calls=1 351
    351 25

    fl=rack-1.3.5/lib/rack/mock.rb
    fn=Rack::MockResponse#body
    170 3
    cfl=/Users/goncalosilva/Code/railscasts/ruby_runtime
    cfn=Array#join
    calls=1 181

!SLIDE center

#### Graph profiling report (html)

<img src="/file/images/graph_html_report.png"/>

!SLIDE center

#### Stack profiling report (html)

<img src="/file/images/stack_html_report.png"/>

!SLIDE

### MRI, REE

#### Flat, Graph, Tree (text and HTML)

!SLIDE

### JRuby, Rubinius

#### Flat, Graph (only text)

!SLIDE

## Quick testing

!SLIDE

### Benchmarking

    @@@ ruby
    $ rails benchmarker "Ruby.expensive_method"

!SLIDE

### Profiling

    @@@ ruby
    $ rails profiler "Ruby.method; Ruby.another_method"

!SLIDE

#### Great for quick testing

!SLIDE

## Configurability

!SLIDE

### Metrics, output formats, runs
