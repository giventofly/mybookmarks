# My bookmarks list organizer

I've made this only for personal use to store my frequently used URLs and give me some sort of helping searching for a specific one.

## How to use ?

* go to /admin (don't forget to protect from unauthorized access)
* add bookmark
* delete bookmark using id to delete an entry
* change one tag from one name to another
* edit the tags from one bookmark
* see and filter the list on the /
* can share a filter option copying the url

## Latest upgrades

* Option to share url from filter (search or tag) - only work on modern browsers: safarIE < 10 excluded [here](https://caniuse.com/#search=URLSearchParams)

## TODO

* better filter algorithm - maybe hide/show using a class instead of refactor all the DOM - lets learn something from REACT :) 
* search more than one tag at a time
* limit the number of visible entries
* it satisfies my needs so i don't have anything more planned.

## How does it?

Using PHP to do the IO of a file (serialize and "JSONifize") then use javascript to make the view and filter.


## Live Link

[here](https://josemoreira.pt/bookmarks)


## small bugfix log

* (...)
* fixed problem when deleting bookmark with id 0
