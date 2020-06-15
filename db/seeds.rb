# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Portfolio.destroy_all
Security.destroy_all
User.destroy_all

# puts "hello"
@user = User.create!({ username: 'jp', email: 'yampi@email.com', password: '123456' })

p "#{User.count} user(s) created"

@port1 = Portfolio.create!(name: 'Port1', user: @user)

@port2 = Portfolio.create!(name: 'Port2', user: @user)

@port3 = Portfolio.create!(name: 'Port3', user: @user)

p @port

p "#{Portfolio.count} porfolio(s) created"

Security.create!(portfolio_id: @port1.id, ticker: 'AAPL', price: 100, ftWH: 120, ftWL: 90, purchase_price: 98, position_size: 2)

Security.create!(portfolio_id: @port1.id, ticker: 'AAPL', price: 100, ftWH: 120, ftWL: 90, purchase_price: 98, position_size: 2)

Security.create!(portfolio_id: @port2.id, ticker: 'TWTR', price: 100, ftWH: 120, ftWL: 90, purchase_price: 100, position_size: 24)

Security.create!(portfolio_id: @port2.id, ticker: 'TWTR', price: 100, ftWH: 120, ftWL: 90, purchase_price: 100, position_size: 24)

Security.create!(portfolio_id: @port3.id, ticker: 'TSLA', price: 1000, ftWH: 120, ftWL: 90, purchase_price: 100, position_size: 1)

Security.create!(portfolio_id: @port3.id, ticker: 'TSLA', price: 1000, ftWH: 120, ftWL: 90, purchase_price: 100, position_size: 1)

# p @security.inspect
# @security.save!

p "#{Security.count} security(s) created"

# Portfolio.destroy_all
# Security.destroy_all
# User.destroy_all

# @user = User.create!({ username: 'jp', email: 'yampi@email.com', password: '123456' })

# p "#{User.count} user(s) created"
# @apple = Security.create!(portfolio: @port, ticker: 'AAPL', price: 100, ftWH: 120, ftWL: 90, purchase_price: 98, position_size: 2)
# p "#{Security.count} security(s) created"

# @port = Portfolio.create!(name: 'Port1', user: @user, security: @apple)

# p "#{Portfolio.count} porfolio(s) created"
