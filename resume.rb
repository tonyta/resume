#!/usr/bin/env ruby
#
# An app for displaying one's resume
# @author Nat Welch - https://github.com/icco/resume

# Include our configurations from config.yaml
configure do
  require 'yaml'
  set :config, YAML.load_file('config.yaml')['user_config']

  require 'sass/plugin/rack'
  Sass::Plugin.options[:template_location] = "views/css"
  Sass::Plugin.options[:css_location] = "public/css"
  Sass::Plugin.options[:style] = :compact
  Sass::Plugin.options[:always_update] = true
  use Sass::Plugin::Rack
end

get '/' do
  rfile = settings.config['file']
  name  = settings.config['name']
  title = "#{name}'s Resume"

  template = Tilt.new(rfile)
  resume = template.render

  erb :index, :locals => {
    :title => title,
    :resume => resume,
    :author => name,
    :key => settings.config['gkey'],
    :filename => rfile
  }
end

# For the plain text version of our resumes
get '/resume.txt' do
  content_type 'text/plain', :charset => 'utf-8'
  File.read(settings.config['file'])
end

# For the PDF version
get '/resume.pdf' do
  send_file('tonyta-resume.pdf')
end
