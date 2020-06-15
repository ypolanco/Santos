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

@port1 = Portfolio.create!(name: 'Tech Mid-Large Cap', user: @user)

@port2 = Portfolio.create!(name: 'Industrials', user: @user)

@port3 = Portfolio.create!(name: 'Apparel', user: @user)

# p @port

p "#{Portfolio.count} porfolio(s) created"

# Portfolio 1

Security.create!(portfolio_id: @port1.id, ticker: 'AAPL', price: 100, ftWH: 120, ftWL: 90, purchase_price: 98, position_size: 19)

Security.create!(portfolio_id: @port1.id, ticker: 'AMD', price: 100, ftWH: 120, ftWL: 90, purchase_price: 98, position_size: 8)

Security.create!(portfolio_id: @port1.id, ticker: 'NVDA', price: 100, ftWH: 120, ftWL: 90, purchase_price: 98, position_size: 6)

Security.create!(portfolio_id: @port1.id, ticker: 'TSLA', price: 100, ftWH: 120, ftWL: 90, purchase_price: 98, position_size: 22)
Security.create!(portfolio_id: @port1.id, ticker: 'IT', price: 100, ftWH: 120, ftWL: 90, purchase_price: 98, position_size: 80)

Security.create!(portfolio_id: @port1.id, ticker: 'NLFX', price: 100, ftWH: 120, ftWL: 90, purchase_price: 98, position_size: 18)

Security.create!(portfolio_id: @port1.id, ticker: 'AMZN', price: 100, ftWH: 120, ftWL: 90, purchase_price: 98, position_size: 19)

Security.create!(portfolio_id: @port1.id, ticker: 'SMFT', price: 100, ftWH: 120, ftWL: 90, purchase_price: 98, position_size: 16)

# Portfolio 2

Security.create!(portfolio_id: @port2.id, ticker: 'BA', price: 100, ftWH: 120, ftWL: 90, purchase_price: 100, position_size: 24)

Security.create!(portfolio_id: @port2.id, ticker: 'GE', price: 100, ftWH: 120, ftWL: 90, purchase_price: 100, position_size: 9)

Security.create!(portfolio_id: @port2.id, ticker: 'AAL', price: 100, ftWH: 120, ftWL: 90, purchase_price: 100, position_size: 12)

Security.create!(portfolio_id: @port2.id, ticker: 'DAL', price: 100, ftWH: 120, ftWL: 90, purchase_price: 100, position_size: 17)
Security.create!(portfolio_id: @port2.id, ticker: 'UAL', price: 100, ftWH: 120, ftWL: 90, purchase_price: 100, position_size: 18)

Security.create!(portfolio_id: @port2.id, ticker: 'ROK', price: 100, ftWH: 120, ftWL: 90, purchase_price: 100, position_size: 6)

Security.create!(portfolio_id: @port2.id, ticker: 'ODFL', price: 100, ftWH: 120, ftWL: 90, purchase_price: 100, position_size: 90)

Security.create!(portfolio_id: @port2.id, ticker: 'XLI', price: 100, ftWH: 120, ftWL: 90, purchase_price: 100, position_size: 17)

# Portfolio 3 

Security.create!(portfolio_id: @port3.id, ticker: 'NKE', price: 1000, ftWH: 120, ftWL: 90, purchase_price: 100, position_size: 100)

Security.create!(portfolio_id: @port3.id, ticker: 'UA', price: 1000, ftWH: 120, ftWL: 90, purchase_price: 100, position_size: 19)

Security.create!(portfolio_id: @port3.id, ticker: 'ADDYY', price: 1000, ftWH: 120, ftWL: 90, purchase_price: 100, position_size: 46)

Security.create!(portfolio_id: @port3.id, ticker: 'RBK', price: 1000, ftWH: 120, ftWL: 90, purchase_price: 100, position_size: 12)

Security.create!(portfolio_id: @port3.id, ticker: 'PUMSY', price: 1000, ftWH: 120, ftWL: 90, purchase_price: 100, position_size: 8)

Security.create!(portfolio_id: @port3.id, ticker: 'FILA', price: 1000, ftWH: 120, ftWL: 90, purchase_price: 100, position_size: 1)

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
