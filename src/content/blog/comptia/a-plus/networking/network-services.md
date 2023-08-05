---
title: Network Services
description: Learn about services supporting, DNS, DHCP, printing, email, and more.
pubDatetime: 2023-07-30T07:33:25.533Z
author: Greg Zometa
postSlug: networking-services
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
[CompTIA A+](https://www.comptia.org/certifications/a) Core 1 certification endeavor. This includes ports, protocols,
services, standards, tools, and connectivity types all for networking.

## Table of contents

If you've ever worked in a data center or you have an organization that has a data center, then this picture probably
looks familiar. It’s row after row after row of 19 inch racks. And those racks have inside of them many different types
of computing systems. In this video, we’ll look at many different kinds of network services and see what types of things
might be running inside of this company’s data center.

## DNS

The Domain Name System ([DNS](https://www.cloudflare.com/learning/dns/what-is-dns/)) is the phonebook of the Internet.
When users type [domain names](https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name/) such as
"google.com" or "nytimes.com" into web browsers, DNS is responsible for finding the correct
[IP address](https://www.cloudflare.com/learning/dns/glossary/what-is-my-ip-address/) for those sites. DNS is a
distributed naming system, which means you might have many different DNS servers in your environment. Outside of your
organization, you’re probably communicating with many other DNS servers as well.

In a typical DNS query without any [caching](https://www.cloudflare.com/learning/cdn/what-is-caching/), there are four
servers that work together to deliver an IP address to the client: recursive resolvers, root nameservers, TLD
nameservers, and authoritative nameservers.

### Recursive resolver

The DNS recursor (also referred to as the DNS resolver) is a server that receives the query from the DNS client, and
then interacts with other DNS servers to hunt down the correct IP. Once the resolver receives the request from the
client, the resolver then actually behaves as a client itself, querying the other three types of DNS servers in search
of the right IP.

### Root nameservers

First the resolver queries the root nameserver. The root server is the first step in translating (resolving)
human-readable domain names into IP addresses. The root server then responds to the resolver with the address of a
[top-level domain (TLD)](https://www.cloudflare.com/learning/dns/top-level-domain/) DNS server (such as .com or .net)
that stores the information for its domains.

### TLD nameservers

Next the resolver queries the TLD server. The TLD server responds with the IP address of the domain’s authoritative
nameserver. The recursor then queries the authoritative nameserver, which will respond with the IP address of the origin
server.

### Authoritative nameservers

The resolver will finally pass the origin server IP address back to the client. Using this IP address, the client can
then initiate a query directly to the origin server, and the origin server will respond by sending website data that can
be interpreted and displayed by the web browser.

## DHCP

[Dynamic Host Configuration Protocol](https://www.techtarget.com/searchnetworking/definition/DHCP) (DHCP) is a network
management protocol used to dynamically assign an IP address to any device,
or [node](https://www.techtarget.com/searchnetworking/definition/node), on a network so it can communicate using IP.
DHCP automates and centrally manages these configurations rather than requiring network administrators to manually
assign IP addresses to all network devices. DHCP can be implemented on small local networks, as well as large enterprise
networks.

DHCP runs at the application layer of the [TCP/IP](https://www.techtarget.com/searchnetworking/definition/TCP-IP) stack.
It dynamically assigns IP addresses to DHCP clients and allocates TCP/IP configuration information to DHCP clients. This
information includes [subnet](https://www.techtarget.com/searchnetworking/definition/subnet) mask information,
default gateway IP addresses and domain name system
([DNS](https://www.techtarget.com/searchnetworking/definition/domain-name-system)) addresses.

DHCP assigns new IP addresses in each location when devices are moved from place to place, which means network
administrators do not have to manually configure each device with a valid IP address or reconfigure the device with a
new IP address if it moves to a new location on the network.

## File server

A[ file server](https://www.techtarget.com/searchnetworking/definition/file-server) is a computer responsible for the
storage and management of data files so that other computers on the same network can access the files. It enables users
to share information over a network without having to physically transfer files. File servers are a common target for
[hackers](https://www.techtarget.com/searchsecurity/definition/hacker) and
[ransomware](https://www.techtarget.com/searchsecurity/definition/ransomware), so particular attention must be given to
securing them against attacks.

The operating system you’re using has a common way to communicate to this file server. If you’re in Windows, you’re
probably using SMB or the Server Message Block. If you’re using Mac OS, you’re probably using AFP or the Apple Filing
Protocol. From a user’s perspective, they have no idea what protocols are in use on the network. Instead, they see a
front end layer that they can interact with to copy files, delete files, rename files, or do anything else.

## Print server

A [print server](https://www.techtarget.com/whatis/definition/print-server) is a software application, network device or
computer that manages print requests and makes printer [queue](https://www.techtarget.com/whatis/definition/queue)
status information available to end users and network administrators. Print servers are used in both large enterprise
and small or home office ([SOHO](https://www.techtarget.com/searchmobilecomputing/definition/Small-Office-Home-Office))
networks.

This is usually hardware or software that allows us to connect this printer to the network so that everyone can access
that centralized resource. In a large organization, a single dedicated computer acting as a print server might manage
hundreds of printers. In a small office, a print server is often a specialized plug-in board or small network device
about the size of a [hub](https://www.techtarget.com/searchnetworking/definition/hub) that performs the same function as
a dedicated print server, but frees up valuable disk space on the office's limited number of computers.

Many printers might also have a hardware card to connect directly to an ethernet connection. Some printers also have
wireless print servers inside, so you can simply connect to the wireless network to provide those print services. There
are usually some standardized protocols that allow you to send these print jobs to a print server, and usually you’d be
running a Server Message Block
([SMB](https://www.techtarget.com/searchnetworking/definition/Server-Message-Block-Protocol)), especially if you’re
running Windows, but you can also use IPP or the Internet Printing Protocol or LPD or the Line Printer Daemon.

## Mail server

A
[mail server](https://www.techtarget.com/whatis/definition/mail-server-mail-transfer-transport-agent-MTA-mail-router-Internet-mailer),
also known as a *mail transfer agent*, or MTA; _mail transport agent_; *mail router*; or _internet mailer_, is an
application that receives incoming email from local users and remote senders and forwards outgoing messages for
delivery. A computer dedicated to running these applications is also called a _mail server_.

A mail server works with other programs to create a messaging system. A messaging system includes all the applications
necessary to keep email moving smoothly. When an email is sent, a program, such as
[Microsoft Outlook](https://www.techtarget.com/searchwindowsserver/definition/Microsoft-Outlook), forwards the message
to a mail server. The mail server then forwards the message to either another mail server or to a holding area on the
same server to be forwarded later.

Mail servers can be divided into two categories: **incoming mail servers and outgoing mail servers**.

An incoming mail server stores mail and sends it to a user's inbox. Post Office Protocol 3 (POP3) and Internet Message
Access Protocol (IMAP) are the two main types of incoming mail servers.

POP3, for example, downloads email from a server and stores incoming email messages on a single device until the user
opens the email client. Once the user downloads the email, it is automatically deleted from the server, unless the "keep
mail on server" setting is enabled. Many internet service providers offer their users POP3 email accounts, as they are
more space efficient.

IMAP servers enable users to preview, delete and organize emails before transferring them to multiple devices from the
email server. Copies of emails are left on the server until the user deletes them.

An outgoing mail server operates by having a user's machine communicate with Simple Mail Transfer Protocol (SMTP), which
handles the email delivery process. SMTP servers work with other types of mail servers, namely POP3 or IMAP, to send
emails from email clients.

## Syslog server

One of the protocols that allows us to consolidate log files is called
[syslog](https://www.techtarget.com/whatis/definition/syslog). If your system collects logs, then it probably has the
option to send those logs to a centralized database using syslog. Syslog servers are typically something that we have
inside of Nix based systems (UNIX and Linux). A [daemon](https://itsfoss.com/linux-daemons/) is a service process that
runs in the background and supervises the system or provides functionality to other processes. A commonly found daemon
in a Nix based system generates the system logs and stores them locally. We can set up a Syslog server and all your Nix
based systems can report over to that Syslog server.

In many organizations, we use a
[Security Information and Event Manager](https://www.techtarget.com/searchsecurity/definition/security-information-and-event-management-SIEM)
(SIEM) to collect all of the log files. As you can imagine log files take a lot of room, so the SIEM usually has a very
large drive array and we’re able to store a large number of files over very extended period of time.

## Web server

A [web server](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server) is a
computer that stores web server software and a website's component files (for example, HTML documents, images, CSS
stylesheets, and JavaScript files). These pages could be static pages that are simply transferred across the network or
the web server may be responsible for dynamically creating the page and then sending that page down to the browser.

A web server connects to the Internet and supports physical data interchange with other devices connected to the web.
They use standard protocols such as HTTP or HTTPS.

## Internet appliances

In an enterprise, we might often start our day by logging in to our local computer or we may be connecting from a VPN
and we would use a username and password to provide that authentication. And often the authentication that we would use
between all of these different services is identical. So how does the enterprise use the same authentication method
across all of these different servers? In most cases, the organization’s using an authentication server which
centralizes all of those usernames and passwords to a single service.

This isn’t something we would commonly use on a home network because we don’t have a lot of services that we’re logging
into on our local network. But on an enterprise network, there are many different services that we would want to access,
and this centralized authentication server provides us with a way to not only provide access to those services but do it
in a way that our usernames and passwords are protected. As you can imagine, if the authentication server is not
available, then no one would be able to log in and use any of the resources on your network. For that reason, this is
considered to be a very critical resource, and it’s very common for organizations to have multiple authentication
servers on their network for redundancy.

Your mail client probably has a separate folder already configured inside of it called spam. That spam folder takes any
messages which may be unsolicited attempts at getting your attention and puts all of those messages into a spam folder
so that you don’t have to read them. The content of these spam messages can vary widely. These could be commercial
attempts to get you to buy something. It might be someone trying to get you to click on a link that sends you to a
malicious website. Or it may be a phishing attempt, which is trying to get you to give away some of your personal
information.

Managing all of these spam messages can be complex. It’s already difficult to identify the spam message, and then we
also have to manage what we do with those messages once they’re identified. There are obviously security concerns. We
have to think about where we’re going to store this information and for how long we’re going to keep these spam messages
stored in our databases.

Some organizations will have a separate mail gateway in their network. In this example, that mail is being sent and
received from the internet through a firewall that then sends it to the mail gateway on a screen subnet. These mail
gateways can also be stored in the cloud and there may be a third party provider that’s being used to provide that
functionality. Once the mail is scanned, it can then be sent to the internal network and stored on a local internal mail
server. This gives us the opportunity to categorize mail as spam or to completely reject the mail and prevent its access
to the internal server.

Many organizations have begun consolidating many of their security functions on the network to a single device. Often
this is a next generation firewall, but you may find older systems that do this called a Unified Threat Management
device or a UTM. Some people often refer to this as a web security gateway. These devices can perform many different
security functions. For example, you may have URL filtering or content inspection built into the device. These may be
able to identify malware or the transfer of files that may contain malware. These could be a spam filter on their own.

You might also have other networking features such as CSU DSU capabilities which allow you to connect to a wide area
network. These devices often act as routers and they usually might also have switch interfaces on the back of these
devices. And of course, they act also as a firewall so you can allow or disallow certain traffic flows through your
network. These devices can often act as intrusion detection systems or intrusion prevention systems, which can block
known attacks from traversing the network. These devices can also act as bandwidth shapers or quality of service devices
so that different applications can be prioritized in real time. And if you need people to connect to the network that
are outside of your facility, you might want to use an encrypted tunnel through a virtual private network.

In an enterprise environment, we’re very sensitive to downtime. If a server becomes unavailable, the user may not be
able to complete certain tasks or they may not be able to buy anything from us because the server is not responding. To
be able to provide continuous uptime and availability, we need multiple servers. And the way that you would distribute
the load across those servers is with a load balancer. The load balancer is responsible for checking in with all of the
servers that are connected to it. And if one particular server becomes unresponsive, it simply removes that server from
the load and continues operating with the remaining servers.

This is usually the primary reason a load balancer is installed is to have multiple servers and be able to distribute
the load across all of those devices. Since the load balancer is sitting in the middle of these conversations, it can
also make changes to the way certain protocols might work. For example, it’s common for a load balancer to offload TCP
so that it has a constant connection between all of the servers connected to it. This load balancer might also be
providing SSL offloading.

So all of the encryption and decryption from these servers is happening on the load balancer instead of having the
servers manage that process themselves. These load balancers can commonly cache information so that requests from the
internet may not have to go down to a server. Instead the load balancer may already have that information in a cache and
can simply respond back to the internet without involving any of the connected servers.

We can also perform some very advanced configurations of the traffic going through this load balancer. So we might
configure certain web pages or certain applications to have priority over others. We might also tell the load balancer
that certain applications should prioritize to certain servers and other applications or web pages can be moved to other
servers. This content switching capability allows the load balancer to optimize communication with the servers that can
respond the best.

Some organizations have installed proxy servers to add additional security to their internet communications. As the name
implies, a proxy sits in the middle of a conversation. Users will make a request to the proxy. The proxy then makes the
request to the third party service, receives a response from that service, and then examines the response to make sure
nothing within that response is malicious. Once everything is checked and everything looks OK, that response is then
sent to the end user. This means that we can put a lot of security controls into the proxy. The proxy can act as access
control, so it may require a username and password to gain access to the internet. It can perform caching. It can filter
by URL and many other security capabilities as well.

## SCADA

If you work in an industrial environment, then you’re probably already familiar with SCADA or ICS. The stands for the
Supervisory Control And Data Acquisition system. You might also hear this referred to as an Industrial Control system,
or ICS. The SCADA systems are responsible for control and management of these industrial machines. So if you are part of
a power company and you have power generation equipment or you’re a manufacturing company with these large manufacturing
equipment, you might use some SCADA to be able to manage those devices. SCADA allows us to see exactly what’s happening
on these devices and to be able to manage and control these devices across the network.

As you can imagine, these power generation systems and manufacturing equipment can be very expensive systems. And an
outage of these systems might have a dramatic impact. For those reasons, SCADA systems are usually segmented from the
rest of the network, and you very often need additional rights, permissions, and connections to even gain access to
these very important systems.

One common theme with data centers is once a service is installed, it’s very difficult to get that service removed from
the data center. And often devices and services may sit in the data center for 10 years or even more. We often refer to
these systems as legacy systems. And although they’re very old, they usually have an extremely important service that’s
running on them. Very often these legacy systems are running on older software or older hardware, and it might be very
difficult to resolve a problem with this device just because the software and hardware are not well supported or may be
difficult to obtain.

Another type of service you might find in your data center is an embedded system. These are systems where you normally
don’t have access to the operating system or any other aspect inside of the device. Instead it is a purpose built device
that’s designed for you to only have access to the service or the application that that device provides. This might be
something like an alarm system or a door security system or perhaps the time card system that you use to keep track of
when people come to work and when they leave. Those devices commonly don’t have an operating system that we can update
or even view. Because of that, we rely on the manufacturer of these purpose built systems to be able to provide us with
support and ongoing maintenance.

## IOT

And one of the newest category of systems that you now find in the enterprise are Internet of Things devices or IoT.
We’re starting to find an increasing number of IoT devices not only on our enterprise networks but our home networks. It
seems that everything we’re connecting to a power plug in our home is also connecting to our network.

For example, we’re starting to see appliances such as refrigerators and ovens connect to the wireless network. We have
smart devices like speakers that are responding to our voice commands. Or we might have air control systems that allow
us to manage the temperature of a room all from a centralized app on our mobile device. These IoT devices may also be
responsible for access at our facilities, so they might be a smart doorbell or they might be responsible for unlocking a
door or a garage.

This is another case where the security of these devices is relatively important. We wouldn’t want somebody gaining
access to our systems because they have access to these IoT devices. So commonly we segment IoT devices onto their own
network where we can have additional security and limit anyone else from accessing those systems.
