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

## IP Address Format

‘IP’ stands for [Internet Protocol](https://www.cloudflare.com/learning/network-layer/internet-protocol/), which is the
set of rules that makes it possible for devices to communicate over the
[Internet](https://www.cloudflare.com/learning/network-layer/how-does-the-internet-work/). With billions of people
accessing the Internet every day, unique identifiers are necessary to keep track of who is doing what. The Internet
Protocol solves this by assigning IP numbers to every device accessing the Internet.

A computer’s [IP address](https://www.cloudflare.com/learning/dns/glossary/what-is-my-ip-address/) is like the physical
address of a house. If someone calls a pizzeria to order a delivery, they need to provide their physical address.
Without that address, the pizza delivery person will have no idea which house to deliver the pizza to.

### IPv4

IPv4 stands for Internet Protocol version 4. It is the underlying technology that makes it possible for us to connect
our devices to the web. Whenever a device accesses the Internet, it is assigned a unique, numerical IP address such as
99.48.227.227.

#### IPv4 address classes

With an IPv4 IP address,
[there are five classes of available IP ranges](https://www.computerhope.com/jargon/i/ip.htm#classes): Class A, Class B,
Class C, Class D and Class E, while only A, B, and C are commonly used. Each class allows for a range of valid IP
addresses, shown in the following table (does not include
[private range](https://www.ibm.com/docs/en/networkmanager/4.2.0?topic=translation-private-address-ranges)s).

**This table illustrates the five classes of an IPv4 range**:

| Class   | Address range                | Supports                                                       |
| ------- | ---------------------------- | -------------------------------------------------------------- |
| Class A | 1.0.0.1 to 126.255.255.254   | Supports 16 million hosts on each of 127 networks.             |
| Class B | 128.1.0.1 to 191.255.255.254 | Supports 65,000 hosts on each of 16,000 networks.              |
| Class C | 192.0.1.1 to 223.255.254.254 | Supports 254 hosts on each of 2 million networks.              |
| Class D | 224.0.0.0 to 239.255.255.255 | Reserved for multicast groups.                                 |
| Class E | 240.0.0.0 to 254.255.255.254 | Reserved for future use, or research and development purposes. |

#### Binary decimal conversion

[Converting from binary to decimal](https://www.techtarget.com/searchnetworking/tip/Binary-to-decimal-conversion) isn't
difficult. The numbers 0 and 1 in binary convert to 0 and 1 in decimal. After that, it gets a little more complicated.

To convert binary into decimal:

- always start on the right-hand side of the binary number
- understand that each decimal digit in the binary conversion chart doubles in size as it goes left

To convert decimal into binary:

- always start on the left-hand side of the decimal space
- subtract the number by the decimal space as it goes right
  - if the number subtracted is less than zero set the binary to 0
  - if the number subtracted is greater than or equal to zero set the binary to 1
  - continue doing this until the number subtracted reaches zero

**This table illustrates the a table to use for binary decimal conversion**:

<table style="width: 100%;"> 
  <tbody> 
   <tr> 
    <td width="97"> <p>Power of two</p> </td> 
    <td width="34"> <p>2<sup>7</sup></p> </td> 
    <td width="27"> <p>2<sup>6</sup></p> </td> 
    <td width="27"> <p>2<sup>5</sup></p> </td> 
    <td width="27"> <p>2<sup>4</sup></p> </td> 
    <td width="24"> <p>2<sup>3</sup></p> </td> 
    <td width="24"> <p>2<sup>2</sup></p> </td> 
    <td width="24"> <p>2<sup>1</sup></p> </td> 
    <td width="24"> <p>2<sup>0</sup></p> </td> 
   </tr> 
   <tr> 
    <td width="97"> <p>Decimal space</p> </td> 
    <td width="34"> <p>128</p> </td> 
    <td width="27"> <p>64</p> </td> 
    <td width="27"> <p>32</p> </td> 
    <td width="27"> <p>16</p> </td> 
    <td width="24"> <p>8</p> </td> 
    <td width="24"> <p>4</p> </td> 
    <td width="24"> <p>2</p> </td> 
    <td width="24"> <p>1</p> </td> 
   </tr> 
   <tr> 
    <td width="97"> <p>Binary bits</p> </td> 
    <td width="34"></td> 
    <td width="27"></td> 
    <td width="27"></td> 
    <td width="27"></td> 
    <td width="24"></td> 
    <td width="24"></td> 
    <td width="24"></td> 
    <td width="24"></td> 
   </tr> 
  </tbody> 
 </table>

### IPv6

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

BOOTP was a good start, but it didn’t assign all of the different configuration settings that we needed. There were
still some manual configurations that you had to do yourself. And BOOTP had no idea when a device would leave the
network, so that it could use that IP address for another device later on. To correct some of these shortcomings, we
created a new version of BOOTP. And we gave it a new name, the Dynamic Host Configuration Protocol or DHCP.

## DHCP

DHCP has been around for quite some time since 1997. And it provides an automatic configuration of IP addresses, subnet
masks, default gateways, and many more settings as well. We often don’t even think about the process that DHCP goes
through to assign these values to your computer. We simply turn on our system, and it magically has an IP address once
it boots up. But behind the scenes there are a series of steps that take place to provide that IP configuration to your
device.

### DORA

We refer to these four steps as D-O-R-A or Dora. The first of these is the D step or discover, where our devices will
try to locate a DHCP server that’s on our local network. The next step of O is to offer where a DHCP server will offer
an IP address to our device. Our device will then look at the one or many offers that we receive, pick one of those
offers, and then request that IP address from the offering DHCP server. And finally, the DHCP server will acknowledge
that offer and provide your system with all of the IP configuration settings that it needs.

Let’s look at each of these steps to see exactly how this process occurs on our network. Here’s a simple network diagram
that includes my client workstation, which is connected to a switch. And that switch I also have connected a local DHCP
server on my local subnet. And I have a router that’s on my network as well. On the other side of that router, on a
separate IP subnet, is another DHCP server so that we can have some type of redundancy if either one of those was to
fail.

The step one of the DHCP process or the discover part of the process has my client workstation sending a broadcast out
to the network to UDP port 67. This broadcast will be sent to all devices on my local network. And that broadcast is
going to be sent both to the router that’s on my network and the DHCP server that’s on my network. One of the things
that you probably remember from looking at broadcast multicast and unicast is that routers will not allow broadcast to
pass.

But you’ll notice in our example, the broadcast did pass through this router and was directed to a DHCP server. That’s
because we’ve effectively configured this router as a DHCP proxy. You’ll sometimes see this referenced as a DHCP relay,
and some manufacturers call it an IP helper. This obviously requires that you pre-configure this router so that any
broadcasts associated with DHCP are automatically forwarded to a DHCP server elsewhere on the network.

Now that these two DHCP servers have received our request, we can move to step two or the offer phase. These two devices
will send their offers back to the original client workstation. This is often sent to a broadcast address over UDP 68.
The reason we’re using so many broadcasts is because, remember, our client workstation does not yet have an IP address.
Now that this message is sent to the client workstation, it can examine both of those offers and make a decision on
which offer it should take for the IP address assignment.

The client workstation will send another broadcast over UDP port 67 on step three or the request phase. This broadcast
contains a formal request to take the offer that was originally sent. And in this particular example, I’m only showing
the communication that’s occurring between the client workstation and the DHCP server that made the original offer. But
of course, since this is a broadcast, it would be sent to all other devices on this local subnet. And now that the DHCP
server has received this formal request, it can begin step four or the acknowledgment phase where it sends a message
back to the client workstation by default over UDP port 68 confirming that the request from the previous phase has been
acknowledged, and this device can assign itself with the configuration settings included in the offer.

This four step DORA process happens every time a device connects to the network and needs to obtain an IP address from a
DHCP server. When these DHCP servers were first configured, a range of IP addresses was configured inside of that server
to hand out to the different clients. We refer to this as a pool of IP addresses. And the IP address that you may pull
one day from this pool may be different than when you might use on a different day. But there might be some devices on
your network that you would prefer always receive exactly the same IP address every single time it starts up.

There might be a printer, a server, or some type of infrastructure device that you would prefer to always have the same
IP. One of the ways you could do this is to simply disable DHCP on all of these devices and manually configure the IP
addresses yourself. This obviously requires that you administratively make this change. And if you make any changes to
the IP address settings on your network, then you’ll manually need to revisit these devices to change all of your
previous configurations. In a very large environment this may not be very practical. And it certainly requires
additional administration.

So instead of manually setting an IP address, we can configure a reservation on the DHCP server. This means we’ll
configure a specific MAC address of a printer, a server, or another device on the network, and tell our DHCP server
every time you see this MAC address, always provide it with this reserved IP address. This way every time we start up
the printer or the server, it will always have exactly the same IP address. This is the best practice for IP address
configurations because we know it’s so easy to set a manual address. The problem is that when there are changes to the
network, you’ll have to go back to every single one of those devices. So having a reservation already in the DHCP server
can make this process so much easier than revisiting all of these different devices on your network.

## APIPA

There may be times when your device is configured to obtain a DHCP address, but on your local network there’s no longer
a DHCP server. In those situations your device will be assigned an APIPA address. That stands for an Automatic Private
IP Addressing Address. This is sometimes referred to as a link-local address, because any device that’s configured with
an APIPA address range can only communicate to other devices on the local network. If your device is assigned an APIPA
address, it can’t communicate outside of your local network.

Like most things, there is a standard for the automatic private IP addressing. The entire range is 169.254.0.0 through
169.254.255.255. This particular standard reserves the first and last 256 addresses. So if you are assigned an APIPA
address, it will be a random assignment between 169.254.1. 0 through 169.254.254.255. If you see any of those IP
addresses on a system, then you can automatically assume that a DHCP server was not available when the system started
up. And you will only be able to communicate with other devices on your local network.

Like DHCP, APIPA addresses are also assigned to automatically. But the only device determining what IP address you
receive is your local device itself. Your local device will pick a random IP address that’s in this APIPA address range.
It will perform an address resolution protocol or ARP request to see if anybody else on the local network is currently
using that IP address. And if it doesn’t receive a response, it assigns signs that APIPA address to your local device.

Here’s what you would see if you ran an ipconfig/all on a Windows device that has an APIPA address assigned. You can see
that the IPv4 address configuration even states that it is an autoconfiguration address. And it is assigned
169.254.228.109 with the default subnet mask for APIPA of 255.255.0.0. And because you can’t communicate outside of this
local network, you can see that the default gateway option has been left blank.
