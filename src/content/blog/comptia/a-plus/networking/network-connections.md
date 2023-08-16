---
title: Network Connections
description: Learn about DNS server configuration and virtual connections VLANs andVPNs.
pubDatetime: 2023-07-30T07:33:25.533Z
postSlug: networking-connections
featured: true
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

## DNS

The [Domain Name System (DNS)](/posts/networking-services/#dns) is the phonebook of the Internet. Each device connected
to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for
humans to memorize IP addresses such as `192.168.1.1` ([IPv4](/posts/networking-configurations#ipv4)), or more complex
newer alphanumeric IP addresses such as `2400:cb00:2048:1::c629:d7a2`
([IPv6](http://localhost:3000/posts/networking-configurations#ipv6)).

The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP
address (such as `192.168.1.1`). An IP address is given to each device on the Internet, and that address is necessary to
find the appropriate Internet device; like a street address is used to find a particular home. When a user wants to load
a webpage, a translation must occur between what a user types into their web browser (example.com) and the
machine-friendly address necessary to locate the example.com webpage.

### Fully-qualified domain name

A fully qualified domain name is a combination of what's known as **a host name and a domain name**. When we talk about
.com .org .gov etc., that is the farthest right portion of what's known as the DNS name space. Our DNS servers are
responsible for locating records within the domain name space. The next part of this domain name is typically the
company or the organization that has basically leased the portion of that name space. And then finally, we have what's
known as the host and the host is typically owned and controlled by the company whose portion of that DNS name space we
see here.

```text
# example
https://www.example.com

# protocol
https://

# subdomain
www

# domain name
example

# top-level domain
com

# root domain (domain name and top-level name)
example.com
```

### DNS servers

- **[DNS recursor](https://www.cloudflare.com/learning/dns/dns-server-types/)** - The recursor can be thought of as a
  librarian who is asked to go find a particular book somewhere in a library. The DNS recursor is a server designed to
  receive queries from client machines through applications such as web browsers. Typically the recursor is then
  responsible for making additional requests in order to satisfy the client’s DNS query.
- **Root nameserver** - The [root server](https://www.cloudflare.com/learning/dns/glossary/dns-root-server/) is the
  first step in translating (resolving) human readable host names into IP addresses. It can be thought of like an index
  in a library that points to different racks of books - typically it serves as a reference to other more specific
  locations.
- **[TLD nameserver](https://www.cloudflare.com/learning/dns/dns-server-types/)** - The top level domain server
  ([TLD](https://www.cloudflare.com/learning/dns/top-level-domain/)) can be thought of as a specific rack of books in a
  library. This nameserver is the next step in the search for a specific IP address, and it hosts the last portion of a
  hostname (In example.com, the TLD server is “com”).
- **[Authoritative nameserver](https://www.cloudflare.com/learning/dns/dns-server-types/)** - This final nameserver can
  be thought of as a dictionary on a rack of books, in which a specific name can be translated into its definition. The
  authoritative nameserver is the last stop in the nameserver query. If the authoritative name server has access to the
  requested record, it will return the IP address for the requested hostname back to the DNS Recursor (the librarian)
  that made the initial request.

### Name resolution process

1. A user types ‘example.com’ into a web browser and the query travels into the Internet and is received by a DNS
   recursive resolver.
2. The resolver then queries a DNS root nameserver (.).
3. The root server then responds to the resolver with the address of a Top Level Domain (TLD) DNS server (such as .com
   or .net), which stores the information for its domains. When searching for example.com, our request is pointed toward
   the .com TLD.
4. The resolver then makes a request to the .com TLD.
5. The TLD server then responds with the IP address of the domain’s nameserver, example.com.
6. Lastly, the recursive resolver sends a query to the domain’s nameserver.
7. The IP address for example.com is then returned to the resolver from the nameserver.
8. The DNS resolver then responds to the web browser with the IP address of the domain requested initially.

Once the 8 steps of the DNS lookup have returned the IP address for example.com, the browser is able to make the request
for the web page:

10. The browser makes a [HTTP](https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/)
    request to the IP address.
11. The server at that IP returns the webpage to be rendered in the browser.

### DNS records

[DNS records](https://www.cloudflare.com/learning/dns/dns-records/) (aka zone files) are instructions that live in
authoritative [DNS servers](#dns-servers) and provide information about a domain including what
[IP address](https://www.cloudflare.com/learning/dns/glossary/what-is-my-ip-address/) is associated with that domain and
how to handle requests for that domain. These records consist of a series of text files written in what is known as DNS
syntax. DNS syntax is just a string of characters used as commands that tell the DNS server what to do.

The most common records are:

- **[A record](https://www.cloudflare.com/learning/dns/dns-records/dns-a-record/)** -- The record that holds the IP
  address of a domain.
- **[AAAA record](https://www.cloudflare.com/learning/dns/dns-records/dns-aaaa-record/)** -- The record that contains
  the IPv6 address for a domain (as opposed to A records, which list the IPv4 address).
- **[CNAME record](https://www.cloudflare.com/learning/dns/dns-records/dns-cname-record/)** -- Forwards one domain or
  subdomain to another domain, does NOT provide an IP address.
- **[MX record](https://www.cloudflare.com/learning/dns/dns-records/dns-mx-record/)** -- Directs mail to an email
  server.
- **[TXT record](https://www.cloudflare.com/learning/dns/dns-records/dns-txt-record/)** -- Lets an admin store text
  notes in the record. These records are often used for email security.
- **[NS record](https://www.cloudflare.com/learning/dns/dns-records/dns-ns-record/)** -- Stores the name server for a
  DNS entry.
- **[SOA record](https://www.cloudflare.com/learning/dns/dns-records/dns-soa-record/)** -- Stores admin information
  about a domain.
- **[SRV record](https://www.cloudflare.com/learning/dns/dns-records/dns-srv-record/)** -- Specifies a port for specific
  services.
- **[PTR record](https://www.cloudflare.com/learning/dns/dns-records/dns-ptr-record/)** -- Provides a domain name in
  reverse-lookups.
- **[SPF record](https://www.cloudflare.com/learning/dns/dns-records/dns-spf-record/)** -- Lists all the servers
  authorized to send emails from a particular domain.
- **[DKIM record](https://www.cloudflare.com/learning/dns/dns-records/dns-dkim-record/)** -- Stores the public key used
  to verify an email's authenticity.
- **[DMARC record](https://www.cloudflare.com/learning/dns/dns-records/dns-dmarc-record/)** -- Authenticates email
  messages.

## VLAN

A LAN is a Local Area Network. We commonly define this as a group of devices that are in the same broadcast domain. In
this example, we have two different switches. One is the red switch and one is the blue switch. On the red network, we
have two devices that are in one broadcast domain. And on the blue switch, we have devices that are on a completely
different broadcast domain. We might want this separation for security reasons.

Certainly this would have a separation between these devices and these. We might want to limit the number of broadcasts
that might be on a network. So we might segment the network into smaller pieces. And in many ways, this is a very
straightforward way to manage the network. Because if somebody needs to be on the red network, we connect them to the
red switch. And if someone needs to be on the blue network, we connect them to the blue switch.

It would be much more efficient and cost effective if we could buy a single switch, maintain a single power source for
that switch and a single configuration, and simply logically associate certain interfaces on that switch to the red
network and logically associate other interfaces on that switch to the blue network. The switch itself would provide the
separation between the red network and the blue network, and these devices still would not be able to communicate
directly to each other.

We refer to this virtualization of the local area network as a VLAN. This is grouping the devices still in their same
broadcast domain, but we’re doing this across the same physical device. This means that we won’t need separate switches.
We can instead have exactly the same functionality on a single switch by implementing and configuring VLANs for each of
these individual interfaces.

Let’s add even a third network. So on this switch, we’ve configured a red network, a blue network, and a green network.
And you can see that we’ve connected different devices to these interfaces. As the network administrator, we’ve
specifically configured the interfaces on the switch to match a certain network. So in this case, if you’re connected to
port one, you’re on the red network. If you’re connected to port nine, you’re on the blue network. And if you’re
connected to port 17, you’re on the green network.

Of course, instead of using colors we associate a VLAN with a number. So the red network may be VLAN 1, the blue network
might be VLAN 2, and the green network might be VLAN 3. You can see that not only does this make it easier to manage the
network, but now we can keep costs lower by having a single switch instead of purchasing three separate switches for
these three VLANs.

## VPN

A technology that has become rather commonplace on our networks today is a VPN or a Virtual Private Network. This is
usually a combination of software and hardware that allows us to securely send information across a public network such
as the internet. Everything sent over that VPN connection is automatically encrypted, which means if anyone in the
middle happens to capture this information, they wouldn’t be able to see or understand anything in the conversation. If
you’ve used a VPN, then you certainly are familiar with how that looks from the desktop of your operating system.

But somewhere it’s connecting to a separate device and the device we’re connecting to is a concentrator. This can be a
standalone device or it may be integrated into a firewall or some other multi-use device. There are many different ways
to deploy VPNs. The example we have here is a hardware device that may have specialized VPN or encryption hardware
inside of it. But you can also configure VPN software that might be running on a server. Many VPN implementations have
their own application that can be installed in an operating system, and you’ll find that these days most modern
operating systems come included with some type of VPN client.

This means that you can still be secure when using your laptop in a coffee shop even if the wireless network in that
coffee shop is one that is open and not encrypted. You would either use VPN software that’s always on and always
connected or you would have the option on your laptop to enable or turn on the VPN capability. When you do that, it
creates an encrypted tunnel back to the VPN concentrator, and now everything sent from your laptop will be encrypted
across the wireless network of the coffee shop, the internet, and any other links until it reaches that VPN
concentrator.

At this point, the VPN concentrator will receive that encrypted information. It will decrypt the data and send that
information into the corporate network. Any device that needs to send information back to the laptop will send that
information to the VPN concentrator. The concentrator will encrypt that data, send it over the encrypted tunnel, and
when it reaches your laptop, the laptop will then decrypt that data so that it can be used locally. This entire process
happens behind the scenes and is automatic when you enable your VPN software.
