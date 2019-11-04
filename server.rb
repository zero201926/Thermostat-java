require 'sinatra'
require 'sinatra/base'
require 'json'
require 'pg'
class ThermostatDatabase < Sinatra::Base

  enable :sessions

  get '/thermostat-database' do
    @connection = PG.connect(dbname: 'thermostat')
    temp = @connection.exec('SELECT temperature FROM settings;')
    psm = @connection.exec('SELECT psm FROM settings;')
    @temp = (temp[0]['temperature']).to_i
    @psm = true?(psm[0]['psm'])
    p temp
    p psm
    erb :data
    # p temp.to_s
    # p psm.to_s
  end
  def true?(obj)
     if obj.to_s.downcase == "true"
       return true
     else
       return false
     end
  end

  run! if app_file == $0
end
