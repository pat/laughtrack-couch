default_run_options[:pty] = true

set :application, 'laughtrack'
set :repository,  'git@github.com:freelancing-god/laughtrack-couch.git'

set :scm,       :git
set :user,      'ltcouch'
set :use_sudo,  false
set :couch,     'http://127.0.0.1:5984'

set :deploy_to, "/home/#{user}/#{application}-couch"

role :app, 'laughtrack.com.au'

namespace :deploy do
  task :start do
    # Nothing to do.
  end
  
  task :stop do
    # Nothing to do.
  end
  
  task :restart do
    # Nothing to do.
  end
  
  task :finalize_update do
    run "cd #{release_path} && couchapp push #{couch}/#{application}"
  end
  
  task :symlink do
    # Nothing to do.
  end
  
  task :migrate do
    # Nothing to do.
  end
end
