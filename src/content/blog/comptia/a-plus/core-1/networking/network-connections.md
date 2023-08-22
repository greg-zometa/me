---
title: Network Connections
description: Learn about DNS server configuration and virtual connections VLANs and VPNs.
pubDatetime: 2023-08-16T15:35:39.260Z
postSlug: networking-connections
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

```
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

10. The browser makes a [HTTP](/posts/networking-ports-and-protocols#web-protocols) request to the IP address.
11. The server at that IP returns the webpage to be rendered in the browser.

### DNS records

[DNS records](https://www.cloudflare.com/learning/dns/dns-records/) (aka zone files) are instructions that live in
authoritative [DNS servers](#dns-servers) and provide information about a domain including what
[IP address](/posts/networking-configurations#ip-address-format) is associated with that domain and how to handle
requests for that domain. These records consist of a series of text files written in what is known as DNS syntax. DNS
syntax is just a string of characters used as commands that tell the DNS server what to do.

The most common records are:

- **[A record](https://www.cloudflare.com/learning/dns/dns-records/dns-a-record/)** — The record that holds the IP
  address of a domain.
- **[AAAA record](https://www.cloudflare.com/learning/dns/dns-records/dns-aaaa-record/)** — The record that contains the
  IPv6 address for a domain (as opposed to A records, which list the IPv4 address).
- **[CNAME record](https://www.cloudflare.com/learning/dns/dns-records/dns-cname-record/)** — Forwards one domain or
  subdomain to another domain, does NOT provide an IP address.
- **[MX record](https://www.cloudflare.com/learning/dns/dns-records/dns-mx-record/)** — Directs mail to an email server.
- **[TXT record](https://www.cloudflare.com/learning/dns/dns-records/dns-txt-record/)** — Lets an admin store text notes
  in the record. These records are often used for email security.
- **[NS record](https://www.cloudflare.com/learning/dns/dns-records/dns-ns-record/)** — Stores the name server for a DNS
  entry.
- **[SOA record](https://www.cloudflare.com/learning/dns/dns-records/dns-soa-record/)** — Stores admin information about
  a domain.
- **[SRV record](https://www.cloudflare.com/learning/dns/dns-records/dns-srv-record/)** — Specifies a port for specific
  services.
- **[PTR record](https://www.cloudflare.com/learning/dns/dns-records/dns-ptr-record/)** — Provides a domain name in
  reverse-lookups.
- **[SPF record](https://www.cloudflare.com/learning/dns/dns-records/dns-spf-record/)** — Lists all the servers
  authorized to send emails from a particular domain.
- **[DKIM record](https://www.cloudflare.com/learning/dns/dns-records/dns-dkim-record/)** — Stores the public key used
  to verify an email's authenticity.
- **[DMARC record](https://www.cloudflare.com/learning/dns/dns-records/dns-dmarc-record/)** — Authenticates email
  messages.

## VLAN

A [virtual LAN](https://www.techtarget.com/searchnetworking/definition/virtual-LAN) (VLAN) is a logical overlay network
that groups together a subset of devices that share a physical LAN, isolating the traffic for each group. A LAN is a
group of computers or other devices in the same place (i.e. building/campus), usually associated with an Ethernet
([Layer 2](https://www.techtarget.com/searchnetworking/definition/Data-Link-layer)) broadcast domain, which is the set
of network devices an [Ethernet](https://www.techtarget.com/searchnetworking/definition/Ethernet) broadcast packet can
reach. Computers on the LAN connect to the same [network switch](/posts/networking-devices#switches), either directly or
through wireless access points (APs) connected to the same switch. Computers can also connect to one of a set of
interconnected switches, such as a set of access switches that all connect up to a backbone switch.

A VLAN, like the LAN it sits atop, operates at Layer 2 of the network, the Ethernet level. VLANs partition a single
switched network into a set of overlaid
[virtual networks](https://www.techtarget.com/searchnetworking/definition/virtual-networking) that can meet different
functional and security requirements. This partitioning avoids the need to have multiple, distinct physical networks for
different use cases.

VLANs can improve performance for devices on them by reducing the amount of traffic a given endpoint sees and processes.
VLANs break up broadcast domains, reducing the number of other hosts from which any given device sees broadcasts. For
example, if all desktop voice over IP phones are on one VLAN and all workstations are on another, phones won't see any
workstation-generated broadcast traffic and vice versa. Each can devote its network resources to relevant traffic only.

VLAN partitioning can also improve security by enabling a higher degree of control over which devices have access to
each other. For example, network teams may restrict management access to network gear or IoT devices to specific VLANs.

Using VLANs to group endpoints also enables administrators to group devices for purely administrative, nontechnical
purposes. For example, they may put all accounting computers on one VLAN, all human resources computers on another and
so on.

## VPN

A [VPN](https://nordvpn.com/what-is-a-vpn/) reroutes your traffic through a remote server, encrypting it in the process.
Typically, when you try to access a website, your
[ISP](https://www.techtarget.com/whatis/definition/ISP-Internet-service-provider) (Internet Service Provider) receives
the request and redirects you to your destination. But when you connect to a VPN, it redirects your internet traffic
through a remote server before sending it over to your destination.

Your [IP](/posts/networking-configurations#ip-address-format) (and, therefore, your virtual location) is also hidden and
you get a new one that belongs to the VPN server you’re connected to. This ensures extra security and significantly
increases your privacy online; no one knows what city or country you’re browsing from.

[VPN works](https://www.cloudflare.com/learning/access-management/what-is-a-vpn/) by creating a secure encrypted
connection between your device and the remote server so that your data can travel in secrecy:

1. When you connect to a virtual private network service, it authenticates your client with a VPN server.
2. The server then applies an encryption protocol to all the data you send and receive.
3. The VPN service creates an encrypted “tunnel” over the internet. This secures the data traveling between you and your
   destination.
4. To ensure each data packet stays secure, a VPN wraps it in an outer packet, which is then encrypted through
   encapsulation. This is the core element of the VPN tunnel, keeping the data safe during transfer.
5. When the data arrives at the server, the outer packet is removed through a decryption process.

### VPN servers

After the VPN tunnel is established, your device sends out encrypted information (like the website you want to visit) to
the [VPN server](https://nordvpn.com/servers/). It decrypts it and forwards the information to the designated web
server. It also hides your real IP address before sending the data out. Instead, you will appear to have the IP address
of the VPN server you’re connected to.

When the web server responds, the VPN server encrypts the data and sends it to you through your ISP. Your VPN client
will decrypt the data once it reaches your device.

### VPN tunneling

The [VPN tunnel](https://nordvpn.com/blog/vpn-tunnel/) is created by first authenticating your client (computer,
smartphone, or tablet) with a VPN server. The server then uses one of several encryption protocols to make sure that no
one can monitor the information traveling between you and your online destination.

Here you should remember that before being sent and received over the internet, any data needs to first be split into
packets. To ensure each data packet stays secure, a VPN service wraps it in an outer packet, which is then encrypted
through a process called encapsulation.

This exterior packet keeps the data secure during the transfer, and it is the core element of the VPN tunnel. When the
data arrives at the VPN server, the outer packet is removed to access the data within, which requires a decryption
process.
