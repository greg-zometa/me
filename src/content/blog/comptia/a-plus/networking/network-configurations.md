---
title: Network Configurations
description: Learn about IP address assignments and settings configuration.
pubDatetime: 2023-08-04T05:56:27.316Z
postSlug: networking-configurations
draft: true
tags:
  - comptia
  - a-plus
  - core-1
  - networking
  - certification
  - studying
---

This post will cover various aspects of the **Networking** section of the
[CompTIA A+](https://www.comptia.org/certifications/a) Core 1 certification endeavor.

## Table of contents

## IPv4

IP version 4, which you will commonly see written as IPv4, is the primary protocol for almost everything that we do on
today’s networks. If you’re communicating between two different devices, IP addresses will be used on both of those
devices. There’s a newer version of IP called IP version 6 or IPv6. And you’ll find that most major operating systems
now support both IPv4 and IPv6 on those systems.

This is the binary representation of 192. This is the binary representation of 168, and so on. You’ll sometimes hear
these referred to as 8-bit segments, one byte, or one octet. And having four of those together is 32 total bits or 4
bytes of an IPv4 address. If you were to convert this binary value back to decimal, you would see that 11000000 is 192.
This also means if we have eight of these bits and they’re all set to 1, the maximum value would be 255. So any of these
groups or octets can have a maximum value of 255.

## IPv6

We quickly realized with the popularity of the internet that we were going to exceed the capacity of what IPv4 addresses
could provide. So we created IPv6 which was a new form of IP that had a much larger address. You can see that an IPv6
address is 128 bits in length. This means that you can have a very large number of total addresses, which ultimately
means that the $6.8 billion people on Earth could have a very large number of addresses for each individual person. This
gives us enough addresses to assign an IPv6 address to almost anything that we might use.

You can see that IPv6 addresses are separated into eight different groups. And each one of those groups consists of 16
bits. This is also two bytes or two octets. Instead of displaying these addresses as binary or decimal, you can see that
in IPv6, we choose to address these in hexadecimal format. So a common IPv6 address might be FE80 colon colon 5D18 colon
652 colon CFFD colon 8F52. As you can tell, it’s a much larger address. And in some ways, it’s a much more difficult
address to try to memorize. For that reason, your DNS is going to be a very important tool to use on your network,
because you’ll very often be referring to these servers by their name instead of their very long and relatively
complicated IPv6 address.

We also tend to see IPv6 addresses assigned with a 64-bit subnet mask. That means that the first 64 bits are the network
address, and the last 64 bits are the host address. If you’re assigning an IP address to a device, there are a number of
important configuration parameters you need to add. The first would obviously be the IP address itself. So for IPv4, you
might assign it an IP address of 192.168.1.165. Every device on your network needs a unique IP address. So you have to
make sure there are no duplicates when you start assigning these IP addresses to devices.

## Subnet mask

Along with the IP address, we also need to assign a subnet mask. This will normally be assigned by the network
administrator. And it’s usually a format like this one, such as, 255.255.255.0. Subnet masks are used by the local
device to determine what subnet it happens to be a part of. So it uses this to mask out the IP address, leaving only the
host address at the end. You’ll often be provided both of these values at the same time. So if you’re assigning an IP to
a device, someone may tell you to assign 192.168.1.165 with a subnet mask of 255.255.255.0. If you only have one of
these parameters, you won’t be able to complete the IP address assignment. Both of these parameters are used in
conjunction with each other. And you have to have both of them to assign an IP.

If the device also needs to communicate outside of your local subnet, and most devices do, you’ll need to also assign a
default gateway. This is the IP address of a router that allows you to communicate outside of your local subnet. So the
default gateway in this particular example is 192.168.1.1. In most cases, this is the bare minimum of configurations you
would need to assign to a local device. So you would need an IP address, a subnet mask, and a default gateway.

## BOOTP
