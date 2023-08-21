---
title: Network Services
description: Learn about services supporting, DNS, DHCP, printing, email, and more.
pubDatetime: 2023-08-07T15:03:38.282Z
postSlug: networking-services
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

The Domain Name System ([DNS](https://www.cloudflare.com/learning/dns/what-is-dns/)) is the phonebook of the Internet.
When users type [domain names](https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name/) such as
"google.com" or "nytimes.com" into web browsers, DNS is responsible for finding the correct
[IP address](https://www.cloudflare.com/learning/dns/glossary/what-is-my-ip-address/) for those sites. DNS is a
distributed naming system, which means you might have many different DNS servers in your environment. Outside of your
organization, you’re probably communicating with many other DNS servers as well.

In a typical DNS query without any [caching](https://www.cloudflare.com/learning/cdn/what-is-caching/), there are four
servers that work together to deliver an IP address to the client: recursive resolvers, root nameservers, TLD
nameservers, and authoritative nameservers.

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

Internet appliances, generally in IT, is very expensive security based devices. It is a type of computing appliance that
aids in the flow of information to other network-connected computing devices. Services that may be provided by a network
appliance include firewall functions, caching, authentication, network address translation and IP address management. It
takes multiple security functionalities and integrates it into a single component that you can manage in a centralized
fashion. Thereby making it a lot easier for us to manage some of our security infrastructure.

An example is a
[unified threat management system](https://www.techtarget.com/searchsecurity/definition/unified-threat-management-UTM)
(UTM) that consolidates many security functions on a network to a single device. Some people often refer to this as a
web security gateway. These devices provide a single point of protection against threats, including viruses, worms,
spyware and other malware, and network attacks. It combines security, performance, management and compliance
capabilities into a single installation, making it easier for administrators to manage networks.

You might also have other networking features such as
[CSU/DSU](https://www.techtarget.com/searchnetworking/definition/CSU-DSU) (Channel Service Unit/Data Service Unit)
capabilities which allow you to connect to a wide area network. It converts a digital data frame from local area network
(LAN) communication technology into a frame appropriate for a wide area network (WAN) and vice versa.

Other ones that exist are [load balancers](https://www.techtarget.com/searchnetworking/definition/load-balancing); a way
to distribute resource requests from some of those servers in our networks. We can take a load balancer and when a
client request we can spread that workload across multiple servers, and evenly distribute the workload. In addition to
maximizing network capacity and ensuring high performance, load balancing
provides [failover](https://www.techtarget.com/searchstorage/definition/failover). If one server fails, a load balancer
immediately redirects its workloads to a backup server, thus mitigating the effect on end users.

Finally a [proxy server](https://www.techtarget.com/whatis/definition/proxy-server) is a dedicated computer or a
software system running on a computer that acts as an intermediary between an endpoint device, such as a computer, and
another server from which a user or client is requesting a service. The proxy server may exist in the same machine as a
firewall server or it may be on a separate server, which forwards requests through the
[firewall](https://www.techtarget.com/searchsecurity/definition/firewall). Proxy servers are used for both legal and
illegal purposes. In the enterprise, a proxy server is used to facilitate security, administrative control or
[caching](https://www.techtarget.com/whatis/definition/server) services, among other purposes. In a personal computing
context, proxy servers are used to enable user
[privacy](https://www.techtarget.com/searchdatamanagement/definition/privacy) and anonymous surfing. Proxy servers can
also be used for the opposite purpose: To monitor traffic and undermine user privacy.

## SCADA

[SCADA](https://www.techtarget.com/whatis/definition/SCADA-supervisory-control-and-data-acquisition) (supervisory
control and data acquisition), sometimes referred to as an ICS (industrial control system), is a category of software
applications for controlling industrial processes, which is the gathering of data in
[real time](https://www.techtarget.com/whatis/definition/real-time) from remote locations in order to control equipment
and conditions. SCADA provides organizations with the tools needed to make and deploy data-driven decisions regarding
their industrial processes.

The SCADA systems are responsible for control and management of these industrial machines. So if you are part of a power
company and you have power generation equipment or you’re a manufacturing company with these large manufacturing
equipment, you might use some SCADA to be able to manage those devices. SCADA allows us to see exactly what’s happening
on these devices and to be able to manage and control these devices across the network.

## IOT

[Internet of things](https://www.techtarget.com/iotagenda/definition/Internet-of-Things-IoT) (IoT) is a variety of
devices that basically connect to the internet. A lot of times they are very low powered devices that form networks and
communicate together. IoT helps people live and work smarter. Consumers, for example, can use IoT-embedded devices
(cars, smartwatches, thermostats, etc.) to improve their lives.

In addition to offering smart devices to personal lives, IoT is essential to business. It provides organizations with a
real-time look into how their systems really work, delivering insights into everything from the performance of machines
to [supply chain](https://www.techtarget.com/whatis/definition/supply-chain) and logistics operations.

IoT enables machines to complete tedious tasks without human intervention. Companies can automate processes, reduce
labor costs, cut down on waste and improve service delivery. IoT helps make it less expensive to manufacture and deliver
goods, and offers transparency into customer transactions.
