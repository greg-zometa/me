---
title: Network Configurations
description: Learn about IP address assignments and network configurations.
pubDatetime: 2023-08-14T21:39:32.804Z
postSlug: networking-configurations
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

Internet Protocol Version 4 (IPv4) addresses are 32-bit integers that can be expressed in hexadecimal notation. The more
common format is `x . x . x . x`, where each x, called an _octet_, can be any value between 0 and 255. For example,
`192.0. 2.146` is a valid IPv4 address. IPv4 still routes most of today's internet traffic.

A 32-bit address space limits the number of unique hosts to 232, which is nearly 4.3 billion IPv4 addresses for the
world to use (4,294,967,296, to be exact). In 2011, the Internet Assigned Numbers Authority (IANA), the global
coordinator of IP addressing, [ran out of free IPv4 address space](https://www.nro.net/ipv4-free-pool-depleted) to
allocate to regional registries. IANA then recovered additional unused IPv4 address blocks from the regional registries
and created a recovered address pool. In 2014, IANA announced that it was redistributing the
[last addresses in the recovered address pool](https://www.icann.org/en/announcements/details/remaining-ipv4-addresses-to-be-redistributed-to-regional-internet-registries--address-redistribution-signals-that-ipv4-is-nearing-total-exhaustion-20-5-2014-en).

With an IPv4 IP address,
[there are five classes of available IP ranges](https://www.computerhope.com/jargon/i/ip.htm#classes): Class A, Class B,
Class C, Class D and Class E, while only A, B, and C are commonly used. Each class allows for a range of valid IP
addresses, shown in the following table (does not include
[private range](https://www.ibm.com/docs/en/networkmanager/4.2.0?topic=translation-private-address-ranges)s).

**This table illustrates the five classes of an IPv4 range**:

| Class   | Address range                | Supports                                                       | Network Id (underlined)    |
| ------- | ---------------------------- | -------------------------------------------------------------- | -------------------------- |
| Class A | 1.0.0.1 to 126.255.255.254   | Supports 16 million hosts on each of 127 networks.             | <u>xxxx</u>.xxxx.xxxx.xxxx |
| Class B | 128.1.0.1 to 191.255.255.254 | Supports 65,000 hosts on each of 16,000 networks.              | <u>xxxx.xxxx</u>.xxxx.xxxx |
| Class C | 192.0.1.1 to 223.255.254.254 | Supports 254 hosts on each of 2 million networks.              | <u>xxxx.xxxx.xxxx</u>.xxxx |
| Class D | 224.0.0.0 to 239.255.255.255 | Reserved for multicast groups.                                 | <u>xxxx.xxxx.xxxx.xxxx</u> |
| Class E | 240.0.0.0 to 254.255.255.254 | Reserved for future use, or research and development purposes. | <u>xxxx.xxxx.xxxx.xxxx</u> |

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

| <!-- -->      | <!-- -->      | <!-- -->      | <!-- -->      | <!-- -->      | <!-- -->      | <!-- -->      | <!-- -->      | <!-- -->      |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| Power of two  | 2<sup>7</sup> | 2<sup>6</sup> | 2<sup>5</sup> | 2<sup>4</sup> | 2<sup>3</sup> | 2<sup>2</sup> | 2<sup>1</sup> | 2<sup>0</sup> |
| Decimal space | 128           | 64            | 32            | 16            | 8             | 4             | 2             | 1             |
| Binary bits   | -             | -             | -             | -             | -             | -             | -             | -             |

#### Subnet mask

A [subnet](https://www.techtarget.com/searchnetworking/definition/subnet), or subnetwork, is a segmented piece of a
larger network. More specifically, subnets are a logical partition of an IP network into multiple, smaller network
segments. The Internet Protocol (IP) is the method for sending data from one computer to another over the internet. Each
computer, or host, on the internet has at least one IP address as a unique identifier.

Each subnet allows its connected devices to communicate with each other, while routers are used to communicate between
subnets. The size of a subnet depends on the connectivity requirements and the network technology employed. A
point-to-point subnet allows two devices to connect, while a data center subnet might be designed to connect many more
devices.

### IPv6

[Internet Protocol Version 6 ](https://www.techtarget.com/iotagenda/definition/IPv6-address)(IPv6) addresses are a
128-bit alphanumeric value that is arranged in eight groups, each of which is 16 bits. The more common format is
`y : y : y : y : y : y : y : y`, where _y_ is called a _segment_ and can be any hexadecimal value between 0 and FFFF.
`FE80:CD00:0000:0CDE:1257:0000:211E:729C` is an example of a full IPv6 address. IPv6 is the successor to IPv4, and is
intended to increase address space compared to IPv4.

An IPv6 address is eight groupings of numbers:

- **Network address** — the first three groupings of numbers (first 48 bits) in the subnet mask
- **Subnet address** — the fourth grouping of numbers (the 49th through 64th bits) in the subnet mask
- **Device address** — the last four groupings of numbers (the last 64 bits) in the subnet mask

The IPv6 format was created to enable the trillions of new IP addresses to connect an ever-greater number of computing
devices and the rapidly expanding numbers of items with embedded connectivity, thanks to the internet of things. The
number of potential IPv6 addresses has been calculated to be
[over 340 undecillion](https://www.techtarget.com/whatis/feature/IPv6-addresses-how-many-is-that-in-numbers) (or 340
trillion trillion trillion). However, one drawback to using an IPv6 address is that IPv4 is still widely used.
Communication between IPv4 and IPv6 machines is not directly possible, meaning IPv4 addresses won't be able to see an
IPv6 page, and vice versa. [Gateway](https://internetofthingsagenda.techtarget.com/definition/gateway) equipment is
required to get around this. Dual-stack IP implementation is one such method. In this process, a domain name system
(DNS) can return an IPv4 or IPv6 IP address.

Switching from IPv4 to IPv6 also requires a lot of technical expertise, effort and time

## BOOTP

[BOOTP](https://www.techtarget.com/searchnetworking/definition/BOOTP) (Bootstrap Protocol) is an internet protocol that
lets a network user automatically be configured to receive an IP address and have an operating system booted without
user involvement.

The BOOTP server, managed by a network administrator, automatically assigns the IP address from a pool of addresses for
a certain duration of time.

BOOTP was originally defined in 1985 for Request for Comments 951 to replace Reverse Address Resolution Protocol, which
required servers to be present on each server IP address. With BOOTP, a central BOOTP server could exist for numerous
subnets.

Today, BOOTP is executed using User Datagram Protocol
([UDP](https://www.techtarget.com/searchnetworking/definition/UDP-User-Datagram-Protocol)) and is the basis for Dynamic
Host Configuration Protocol ([DHCP](https://www.techtarget.com/searchnetworking/definition/DHCP)). DHCP servers are used
to receive client requests.

## DHCP Leases

[DHCP (Dynamic Host Configuration Protocol)](/posts/networking-services/#dhcp) is a network management protocol used to
dynamically assign an IP address to any device.

### Static vs. dynamic leases

With dynamic DHCP, a client does not own the IP address assigned to it, but instead *leases* it for a period of time.
Each time a device with a dynamic IP address is powered up, it must communicate with the DHCP server to lease another IP
address.

Static DHCP assignment means the DHCP server assigns the same IP to the defined MAC address every time the device is
connected to the network. The DHCP server serves the reserved IP address when the device using the corresponding MAC
address requests an IP address.

### Lease process

Under a dynamic DHCP setup, a client might also have to perform certain activities that lead to terminating its IP
address and then reconnecting to the network using a different IP address. DHCP lease times can vary depending on how
long a user is likely to need an internet connection at a particular location. Devices release their IP addresses when
their DHCP leases expire and then request a renewal from the DHCP server if they are staying online. The DHCP server may
assign a new address rather than renewing an old one.

The typical dynamic DHCP lease cycle is as follows:

1. A client acquires an IP address lease through the allocation process of requesting one from the DHCP server.
2. If a client already has an IP address from an existing lease, it needs to refresh its IP address when it reboots
   after being shut down and contact the DHCP server to have an IP address reallocated.
3. Once a lease is active, the client is bound to the lease and to the address.
4. Once the lease has expired, a client contacts the server that initially granted the lease to renew it so it can keep
   using its IP address.
5. If a client is moving to a different network, its dynamic IP address is terminated, and it requests a new IP address
   from the DHCP server of the new network.

### DHCP Scope

A DHCP scope is a valid range of IP addresses that are available for assignment or lease to client computers on a
particular subnet. In a DHCP server, a scope is configured to determine the address pool of IPs that the server can
provide to DHCP clients.

Scopes determine which IP addresses are provided to the clients. They should be defined and activated before DHCP
clients use the DHCP server for its dynamic IP configuration. Users can configure as many scopes on a DHCP server as
required in the network environment.

### DORA

DORA helps in providing an IP address to hosts or client machines.
[DORA is the process that follows some steps](https://www.geeksforgeeks.org/how-dora-works/) between the server and
client. It gets the IP address from the centralized server. It consists of four-stage:

- **Discover** — client sends a discover message to server
- **Offer** — server responds with an available IP address and options
- **Request** — client requests the IP address from server
- **Acknowledge** — server acknowledges client request and completes

## APIPA

[Automatic Private IP Addressing](https://www.techtarget.com/whatis/definition/Automatic-Private-IP-Addressing-APIPA)
(APIPA) is a feature of [Windows](https://www.techtarget.com/searchwindowsserver/definition/Windows)-based
[OSes](https://www.techtarget.com/whatis/definition/operating-system-OS) -- included since Windows 98 and Windows ME --
that enables a [Dynamic Host Configuration Protocol](https://www.techtarget.com/searchnetworking/definition/DHCP) client
to automatically assign an
[IP address](https://www.techtarget.com/whatis/definition/IP-address-Internet-Protocol-Address) to itself when there's
no DHCP server available to perform that function. APIPA serves as a DHCP server failover mechanism and makes it easier
to configure and support small [LANs](https://www.techtarget.com/searchnetworking/definition/local-area-network-LAN).

As part of the APIPA assignment process, the DHCP client uses the Address Resolution Protocol
([ARP](https://www.techtarget.com/searchnetworking/definition/Address-Resolution-Protocol-ARP)) to ensure the chosen
address isn't being used by another network computer. Once the client has assigned itself an IP address, it can
communicate over [TCP/IP](https://www.techtarget.com/searchnetworking/definition/TCP-IP) with other computers on the LAN
that are either configured for APIPA or manually set to the correct address range and using a subnet mask of
255.255.0.0.

The APIPA service can be beneficial even if the DCHP client has received a previous IP address from the DHCP server.
This is true even if the lease for that address has expired. The user is typically notified when a DHCP client switches
between DHCP and APIPA addressing. APIPA is enabled by default, but it can be disabled in some cases, depending on the
OS and how the DHCP client is configured.
