@Checkout-001 @happy
Feature: Checkout

Background:
  Given a product "Sticker Pack" is in stock
  And the user has added the product to the cart

Scenario: User can place an order successfully via Checkout
  When the user reviews the cart
  Then the user should see the grand total to be "£9.74"
  And the user proceeds to checkout
  And the user fills valid shipping details
  And the user submits the order
  Then they should see an order successful message
  And the order summary reflects the cart grand total which should be "£9.74"

# @Checkout-002 @negative
# Scenario: User cannot place an order with invalid email
#   When the user proceeds to checkout
#   And the user fills shipping details with email "user211"
#   And the user submits the order
#   Then they should see the error message "A valid email is required"
#   And the order should not be submitted
