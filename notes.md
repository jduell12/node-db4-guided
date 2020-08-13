# Data Modeling Notes

## Guided Project Requirements

Build a data model for a Role Playing Game.

- support unique classes.
- manage user accounts.
- an account can have multiple characters.
- the player picks the class for their character at creation time.
- characters use weapons.
- weapons and other items belong to the account (not to the character).
- a character can pick a "profession" like fisher/farmer/cook/alchemyst.
- a Tool is associated with a profession (e.g.: fishing rod with fisher).

## Types of relationships of tables

- one to one
  - not as common
- one to many
  - most common type of relationship
- many to many

## Good Data Model

- capture ALL information needed
- capture ONLY the information needed
- reflects current reality

## Workflow

- identify entites
- identify relationships between entities
- identify the attributes for the entities
-

## Mantra

- every table must have a primary key
- work on two or three tables at a time
- on a one to many --> use a foreign key
  - foreign key goes on the many table and relates to the one table

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be used for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.
