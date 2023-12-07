#CONTACTS CLI APP

This is CLI app to store your contacts. Therefore, you need to write commands directly in the terminal.
A shortcut method has been so tgat you can enter a short command:

```ruby
-a => --action
-i => --id
-n => --name
-e => -email
-p => --phone
```

To see all contacts-list enter:

```ruby
$ node index -a list
```

Example:

![alt Examle list](https://github.com/AndriiBilyiV/goit-node-hw-01/blob/main/images-for-description/image01.JPG?raw=true)

To find a specific contact enter:

```ruby
$ node index -a get -i [contact-id]
```

Yes, it's not very user-friendly, but that's how this version works :sweat_smile:

Example:

![alt Examle get](https://github.com/AndriiBilyiV/goit-node-hw-01/blob/main/images-for-description/image02.JPG?raw=true)

To add some contact enter:

```ruby
$ node index -a add -n [name] -e [email] -p [phone]
```

To have corrert record I recommend entering values in quotes in string type

Example:

![alt Examle get](https://github.com/AndriiBilyiV/goit-node-hw-01/blob/main/images-for-description/image03.JPG?raw=true)

To delete some contact syntax looks like "get", but you need to use "remove" action

```ruby
$ node index -a remove -i [contact-id]
```

Example:

![alt Examle get](https://github.com/AndriiBilyiV/goit-node-hw-01/blob/main/images-for-description/image04.JPG?raw=true)

##Hope, you enjoy!
