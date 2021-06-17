# Dashboard

- `/`
- stats of the day (deliveries and local)
- list of bookings and events

# Login

- `/login`
- login/pass input
- login button (dashboard link)

# Table availability

- `/tables`
  - data/hour choice
  - table of bookings and events
      - every column = 1 table
      - every row = 30 min
      - looks like goolge calendar, after clicking on a booking, goes to booking:id or event:id
- `tables/booking/:id`
  - has all info about the reservation
  - lets edit the info and save
- `tables/booking/new`
  - same as above without the initial info
- `tables/events/:id`
  - has all info about the event
  - lets edit the info and save
- `tables/events/new`
  - same as above without the initial info

# Waiting view

- `/waiter`
  - table 
    - rows: tables
    - column: status, time since last activity etc
    - last column: actions available for the table
- `/waiter/order/new`
  - table number (editable)
  - products menu
  - options of products
  - order (products plus options)
  - total
- `/waiter/order/:id`
  - as above

# Kitchen view

- `/kitchen`
- display list of orders
- every list has to have: 
  - table number or id of delivery
  - all info about order
- it has to be possible to edit status of order to complete