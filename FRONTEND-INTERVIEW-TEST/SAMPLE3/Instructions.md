# Frontend Developer Test

The Pet Lab Co. uses various tests to assess whether a candidate is best suited to the expectations of the role
advertised and the offer given.

This test aims to demonstrate your technical skills in practice: that you can deliver a solution which implements a
scalable front-end architecture, which is easy to use, and that pays attention to the requirement details.

# Instructions & Deliverables

1. Fork this repository to your account (https://help.github.com/articles/fork-a-repo/)
2. Read these instructions carefully first before continuing with the practical test
3. Read the Requirements / Story Definition and Conditions of Acceptance
4. Identify and write at least 3 test cases (no code necessary; Gherkin or a written list will suffice)
   - Demonstrate your understanding of the Conditions of Acceptance
   - Identify any appropriate edge cases
5. Implement the Story's functionality using the files in 'public' directory
   - Develop a solution which demonstrates your skills and strengths
   - You may add/change/modify any files in the project
   - You may use Google or any other references for angular/bootstrap syntax
6. Describe how you can build a better "Product" for this coding task in SOLUTION.md and include your estimates
7. Create a pull request to origin repository when you are satisfied with your solution (https://help.github.com/articles/about-pull-requests/)

# Other Notes

- This test uses React, you can however use whatever framework of your choosing.
- Please remember to demonstrate your skills and how you would normally approach feature development.
- Please time yourself so that you balance Quality and Delivery. There will be no deadline for this exercise, but you should instead estimate the task, complete the task, and measure your elapsed time. Please submit your estimate and actual time with your code solution
- Solution should be fully working when we check out your code.
- Please make sure any additional dependencies are added in package.json.
- API docs are available [here](./API_DOCS.md)

# Requirements / Story Definitions

### Technical requirements:

Develop an app, where products are retrieved from the API and where filters can be used to limit the results from the
API.

### Product Requirements:

As user I want to list and filter products

```gherkin
WHEN I visit the product collection page
THEN I expect to see filters sidebar
AND I expect to see a table of products
AND I expect to see "12" products in a table
AND I expect to see products pagination

WHEN I visit the product collection page
THEN I expect to see filters sidebar for tags
WHEN I search for "Dog" in filters sidebar
THEN I expect to see 10 products in the resulting table

WHEN I visit the product collection page
THEN I expect to see filters sidebar
WHEN I filter by "Price" "30" in the sidebar
THEN I expect to see 1 product in the resulting table

WHEN I visit the product collection page
THEN I expect to see filters sidebar
WHEN I filter by "Subscription" "Yes" in the sidebar
WHEN I search for "Cat" in filters sidebar
THEN I expect to see 4 products in the resulting table

```
