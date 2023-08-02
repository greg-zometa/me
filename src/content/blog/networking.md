---
title: CompTIA A+ - Networking
description: Learn how computers connect and communicate with each other via networking.
pubDatetime: 2023-07-30T07:33:25.533Z
author: Greg Zometa
postSlug: comptia-a-plus-networking
featured: true
draft: true
tags:
  - comptia
  - a-plus
  - core-1
  - certification
  - studying
---

This post will cover various aspects of the **Networking** section of the
[CompTIA A+](https://www.comptia.org/certifications/a) Core 1 certification endeavor. This includes ports, protocols,
services, standards, tools, and connectivity types all for networking.

## Table of contents

## Ports and Protocols

One of the many fundamental things to know as a network engineer is the function and port number used by a number of
common services as well as many that are typically implemented during the course of a network engineer’s career. While
there are a large number of ports we'll just cover the most commonly seen and used ports/protocols.

### Protocols

A [network protocol](https://www.techtarget.com/searchnetworking/definition/protocol) is a set of established rules that
specify how to format, send and receive data so that computer network endpoints, including computers, servers, routers
and virtual machines, can communicate despite differences in their underlying infrastructures, designs or standards.

Network protocols break larger processes into discrete, narrowly defined functions and tasks across every level of the
network. In the standard model, known as the
[Open Systems Interconnection (OSI)](https://www.techtarget.com/searchnetworking/definition/OS) model, one or more
network protocols govern activities at each layer in the telecommunication exchange. Lower layers deal with data
transport, while the upper layers in the OSI model deal with software and applications.

To understand how network protocols function, it's crucial to understand the workings of the seven layers of the OSI
model:

1. **Physical layer**: The [physical layer](https://www.techtarget.com/searchnetworking/definition/physical-layer) is
   the initial layer that physically connects two interoperable systems. It controls simplex or
   [duplex](https://www.techtarget.com/searchnetworking/definition/full-duplex) modem transmissions and transfers data
   in bits. Additionally, it oversees the hardware that connects the network interface card
   ([NIC](https://www.techtarget.com/searchnetworking/definition/network-interface-card)) to the network, including the
   wiring, cable terminators, topography and voltage levels.
2. **Data-link layer**: The [data-link layer](https://www.techtarget.com/searchnetworking/definition/Data-Link-layer) is
   responsible for the error-free delivery of data from one node to another over the physical layer. It's also the
   [firmware](https://www.techtarget.com/whatis/definition/firmware) layer of the NIC. It puts datagrams together into
   frames and gives each frame the start and stop flags. Additionally, it fixes issues brought on by broken, misplaced
   or duplicate frames.
3. **Network layer**: The [network layer](https://www.techtarget.com/searchnetworking/definition/Network-layer) is
   concerned with information flow regulation, switching and routing between workstations. Additionally, it divides up
   datagrams from the transport layer into error-free and smaller datagrams.
4. **Transport layer**: The [transport layer](https://www.techtarget.com/searchnetworking/definition/Transport-layer)
   transfers services from the network layer to the application layer and breaks down data into data frames for error
   checking at the network segment level. This also ensures that a fast host on a network doesn't overtake a slower one.
   Essentially, the transport layer ensures that the entire message is delivered from beginning to end. It also confirms
   a successful data transmission and retransmitting of the data if an error is discovered.
5. **Session layer**: The [session layer](https://www.techtarget.com/searchnetworking/definition/Session-layer)
   establishes a connection between two workstations that need to communicate. In addition to ensuring security, this
   layer oversees connection establishment, session maintenance and
   [authentication](https://www.techtarget.com/searchsecurity/definition/authentication).
6. **Presentation layer**: The
   [presentation layer](https://www.techtarget.com/searchnetworking/definition/presentation-layer) is also known as the
   _translation layer_ because it retrieves the data from the application layer and formats it for transmission over the
   network. It addresses the proper representation of data, including the syntax and semantics of information. The
   presentation layer is also in charge of managing
   [file-level security](https://www.techtarget.com/searchcontentmanagement/tip/7-common-file-sharing-security-risks)
   and transforming data to network standards.
7. **Application layer**: The
   [application layer](https://www.techtarget.com/searchnetworking/definition/Application-layer), which is the top layer
   of the network, oversees relaying user application requests to lower levels. File transfer, email, remote login, data
   entry and other common applications take place at this layer.

#### Internet protocols

The [Internet Protocol (IP)](https://www.cloudflare.com/learning/network-layer/internet-protocol/) set rules to make it
possible for devices to communicate over the
[Internet](https://www.cloudflare.com/learning/network-layer/how-does-the-internet-work/). With billions of people
accessing the Internet every day, unique identifiers are necessary to keep track of who is doing what. The Internet
Protocol solves this by assigning IP numbers to every device accessing the Internet.

A computer’s [IP address](https://www.cloudflare.com/learning/dns/glossary/what-is-my-ip-address/) is like the physical
address of a house. If someone calls a pizzeria to order a delivery, they need to provide their physical address.
Without that address, the pizza delivery person will have no idea which house to deliver the pizza to.

This is the way that our networks operate. On one side may be your device a workstation, a client, a laptop computer,
and on the other side is a server. This could be a web server or a mail server or any other type of server that you’d be
connecting to. This client is going to send information to this server via
[packets](https://www.cloudflare.com/learning/network-layer/what-is-a-packet/).

Packets consist of two portions: the header and the payload. The header contains information about the packet, such as
its origin and destination [IP addresses](https://www.cloudflare.com/learning/dns/glossary/what-is-my-ip-address/) (an
IP address is like a computer's mailing address). The payload is the actual data. This could be TCP data with a TCP
header and a TCP payload or UDP data with a UDP header and a UDP payload.

[Transmission Control Protocol (TCP)](https://www.cloudflare.com/learning/ddos/glossary/tcp-ip/) is used in conjunction
with IP in order to maintain a connection between the sender and the target, and to ensure packet order. TCP
communications indicate the order in which data packets should be received and confirm that packets arrive as intended.
In a TCP communication, the two computers begin by establishing a connection via an automated process called a three-way
"[handshake](https://www.geeksforgeeks.org/tcp-3-way-handshake-process/)":

- **(SYN)**: The client wants to establish a connection with a server, so it sends a segment with SYN(Synchronize
  Sequence Number) which informs the server that the client is likely to start communication and with what sequence
  number it starts segments with.
- **(SYN + ACK)**: Server responds to the client request with SYN-ACK signal bits set. Acknowledgement(ACK) signifies
  the response of the segment it received and SYN signifies with what sequence number it is likely to start the segments
  with.
- **(ACK)**: Client acknowledges the response of the server and they both establish a reliable connection with which
  they will start the actual data transfer.

Only once this handshake has been completed will one computer actually transfer data packets to the other **If a packet
does not arrive TCP requires that it be re-sent**.

The [User Datagram Protocol (UDP)](https://www.cloudflare.com/learning/ddos/glossary/user-datagram-protocol-udp/), is a
communication protocol used across the Internet for especially time-sensitive transmissions such as
[video playback](https://www.cloudflare.com/learning/video/what-is-streaming/) or
[DNS](https://www.cloudflare.com/learning/dns/what-is-dns/) lookups. It speeds up communications by not formally
establishing a connection before data is transferred and comes with no error checking. Considered "**best effort
delivery**", this allows data to be transferred very quickly, but it can also cause
[packets](https://www.cloudflare.com/learning/network-layer/what-is-a-packet/) to become lost in transit, and create
opportunities for exploitation in the form of
[DDoS attacks](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/). **UDP is faster but less reliable than
TCP**.

#### Email protocols

[Email protocols](https://www.geeksforgeeks.org/email-protocols/) are a collection of protocols provide the ability for
the client to transmit emails to or from the intended email server. There are three basic types of email protocols:

- **Simple Mail Transfer Protocol ([SMTP](https://www.cloudflare.com/learning/email-security/what-is-smtp/))** -- An
  efficient and reliable protocol for sending emails. SMTP handles the sending and receiving of messages between email
  servers over a TCP/IP network. SMTP commands are used to identify the sender and receiver email addresses along with
  the message to be sent.
- **Post Office Protocol (POP)** -- Used to retrieve email for a single client. It is an application layer protocol and
  allows access to email offline via messages downloaded. POP3 version is the current version of POP used.
- **Internet Message Access Protocol ([IMAP](<(https://www.cloudflare.com/learning/email-security/what-is-imap/)>)** --
  Used to retrieve mails for multiple clients. IMAP is an application layer protocol and allows access to email without
  downloading them and also supports email download. There are several IMAP versions: IMAP, IMAP2, IMAP3, IMAP4, etc.

While IMAP and POP are very similar, they do have key differences between the services.

**This table illustrates the difference between IMAP and POP**:

| IMAP                                                                                                                                          | POP                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Users can access their emails from any device.                                                                                                | By default, emails can only be accessed from the device they are downloaded on.              |
| The server stores emails; IMAP acts as an intermediary between the server and the client.                                                     | Once downloaded, emails are deleted from the server, unless otherwise configured.            |
| Emails are not accessible offline.                                                                                                            | Emails are accessible offline but only on the device they were downloaded on.                |
| The bodies of emails are not downloaded until a user clicks on them, but subject lines and sender names populate quickly in the email client. | Emails are downloaded to the device by default, so messages may take longer to load.         |
| IMAP requires more server space because emails are not automatically deleted from the server.                                                 | POP conserves email server storage because emails are automatically deleted from the server. |

#### File protocols

[File transfer protocol (FTP)](https://www.techtarget.com/searchnetworking/definition/File-Transfer-Protocol-FTP) is a
network protocol for transmitting files between computers over TCP/IP connections, and is considered an application
layer protocol. Although many file transfers can be conducted using Hypertext Transfer Protocol (HTTP), FTP is still
commonly used to transfer files behind the scenes for other applications, such as banking services. It is also sometimes
used to download new applications via web browsers.

[Trivial File Transfer Protocol (TFTP)](https://www.lifewire.com/definition-of-tftp-817576) is a simple protocol that
provides basic file transfer function with no user authentication. TFTP is intended for applications that do not need
the sophisticated interactions that FTP provides. TFTP is implemented using UDP and generally works only on
[local area networks](https://www.lifewire.com/what-is-lan-4684071).

**FTP and TFTP are inherently insecure protocols**. They do not use encryption and allow both authentication and file
data to traverse the network in the clear.

#### Remote access protocols

[Remote access protocols](https://www.techtarget.com/searchsecurity/definition/remote-access) enables remote users to
access files and other system resources
[on any devices or servers](https://www.techtarget.com/searchitoperations/tip/Is-Anywhere-Operations-the-right-path-for-your-organization)
that are connected to the network at any time. This increases employee productivity and enables employees to better
collaborate with colleagues around the world.

[SSH, also known as Secure Shell or Secure Socket Shell](https://www.techtarget.com/searchsecurity/definition/Secure-Shell),
is a network protocol that gives users, particularly system administrators, a secure way to access a computer over an
unsecured network. SSH also refers to the suite of utilities that implement the SSH protocol. Secure Shell provides
strong password [authentication](https://www.techtarget.com/searchsecurity/definition/authentication) and
[public key](https://www.techtarget.com/searchsecurity/definition/public-key) authentication, as well as
[encrypted](https://www.techtarget.com/searchsecurity/definition/encryption) data communications between two computers
connecting over an open network, such as the internet.

#### Web protocols

[HTTP stands for Hypertext Transfer Protocol](https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/)
and it is a protocol used for transferring data over a network. Most information that is sent over the Internet,
including website content and API calls, uses the HTTP protocol. There are two main kinds of HTTP messages: requests and
responses.

[HTTPS](https://www.cloudflare.com/learning/ssl/what-is-https/) is HTTP with
[encryption](https://www.cloudflare.com/learning/ssl/what-is-encryption/) and verification. The only difference between
the two protocols is that HTTPS uses [TLS](https://www.cloudflare.com/learning/ssl/transport-layer-security-tls/)
([SSL](https://www.cloudflare.com/learning/ssl/what-is-ssl/)) to encrypt normal HTTP requests and responses, and to
digitally sign those requests and responses. As a result, HTTPS is far more secure than HTTP.

### Ports

A [port](https://www.cloudflare.com/learning/network-layer/what-is-a-computer-port/) is a virtual point where network
connections start and end. Ports are software-based and managed by a computer's operating system. Each port is
associated with a specific process or service. Ports allow computers to easily differentiate between different kinds of
traffic: emails go to a different port than webpages, for instance, even though both reach a computer over the same
Internet connection.

Ports are standardized across all network-connected devices, with each port assigned a number. Most ports are reserved
for certain protocols and allow targeting of specific services or applications within those devices. Common services and
protocols that most computing systems recognize are in a range from 0-1023. The number of protocols available are 65,535
(including 0):

- Registered port ranges -- Organizations set aside and register a port range intended for a specific piece of software.
  These port ranges start at 1024 and go all the way up to 49,151.
- Dynamic ports -- A computer requests a service with a dynamic, temporary port that are between 49,152 and 65,535. Once
  a communication is established on request, the response will generate another dynamic port.

**This table illustrates the most common protocols and port numbers that they are commonly associated with**:

| Protocol                                                              | TCP/UDP | Port Number | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------------------------------------------- | ------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| File Transfer Protocol (FTP) (RFC 959)                                | TCP     | 20/21       | FTP is one of the most commonly used file transfer protocols on the Internet and within private networks. An FTP server can easily be set up with little networking knowledge and provides the ability to easily relocate files from one system to another. FTP control is handled on TCP port 21 and its data transfer can use TCP port 20 as well as dynamic ports depending on the specific configuration.                                                                                                                                                                                                                  |
| Secure Shell (SSH) (RFC 4250-4256)                                    | TCP     | 22          | SSH is the primary method used to manage network devices securely at the command level. It is typically used as a secure alternative to Telnet which does not support secure connections.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Telnet (RFC 854)                                                      | TCP     | 23          | Telnet is the primary method used to manage network devices at the command level. Unlike SSH which provides a secure connection, Telnet does not, it simply provides a basic unsecured connection. Many lower level network devices support Telnet and not SSH as it required some additional processing. Caution should be used when connecting to a device using Telnet over a public network as the login credentials will be transmitted in the clear.                                                                                                                                                                     |
| Simple Mail Transfer Protocol (SMTP) (RFC 5321)                       | TCP     | 25          | SMTP is used for two primary functions, it is used to transfer mail (email) from source to destination between mail servers and it is used by end users to send email to a mail system.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Domain Name System (DNS) (RFC 1034-1035)                              | TCP/UDP | 53          | The DNS is used widely on the public internet and on private networks to translate domain names into IP addresses, typically for network routing. DNS is hieratical with main root servers that contain databases that list the managers of high level Top Level Domains (TLD) (such as .com). These different TLD managers then contain information for the second level domains that are typically used by individual users (for example, cisco.com). A DNS server can also be set up within a private network to private naming services between the hosts of the internal network without being part of the global system. |
| Dynamic Host Configuration Protocol (DHCP) (RFC 2131)                 | UDP     | 67/68       | DHCP is used on networks that do not use static IP address assignment (almost all of them). A DHCP server can be set up by an administrator or engineer with a poll of addresses that are available for assignment. When a client device is turned on it can request an IP address from the local DHCP server, if there is an available address in the pool it can be assigned to the device. This assignment is not permanent and expires at a configurable interval; if an address renewal is not requested and the lease expires the address will be put back into the poll for assignment.                                 |
| Trivial File Transfer Protocol (TFTP) (RFC 1350)                      | UDP     | 69          | TFTP offers a method of file transfer without the session establishment requirements that FTP uses. Because TFTP uses UDP instead of TCP it has no way of ensuring the file has been properly transferred, the end device must be able to check the file to ensure proper transfer. TFTP is typically used by devices to upgrade software and firmware; this includes Cisco and other network vendors’ equipment.                                                                                                                                                                                                              |
| Hypertext Transfer Protocol (HTTP) (RFC 2616)                         | TCP     | 80          | HTTP is one of the most commonly used protocols on most networks. HTTP is the main protocol that is used by web browsers and is thus used by any client that uses files located on these servers.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Post Office Protocol (POP) version 3 (RFC 1939)                       | TCP     | 110         | POP version 3 is one of the two main protocols used to retrieve mail from a server. POP was designed to be very simple by allowing a client to retrieve the complete contents of a server mailbox and then deleting the contents from the server.                                                                                                                                                                                                                                                                                                                                                                              |
| Network Time Protocol (NTP) (RFC 5905)                                | UDP     | 123         | One of the most overlooked protocols is NTP. NTP is used to synchronize the devices on the Internet. Even most modern operating systems support NTP as a basis for keeping an accurate clock. The use of NTP is vital on networking systems as it provides an ability to easily interrelate troubles from one device to another as the clocks are precisely accurate.                                                                                                                                                                                                                                                          |
| NetBIOS (RFC 1001-1002)                                               | TCP/UDP | 137/138/139 | NetBIOS itself is not a protocol but is typically used in combination with IP with the NetBIOS over TCP/IP (NBT) protocol. NBT has long been the central protocol used to interconnect Microsoft Windows machines.                                                                                                                                                                                                                                                                                                                                                                                                             |
| Internet Message Access Protocol (IMAP) (RFC 3501)                    | TCP     | 143         | IMAP version3 is the second of the main protocols used to retrieve mail from a server. While POP has wider support, IMAP supports a wider array of remote mailbox operations which can be helpful to users.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Simple Network Management Protocol (SNMP) (RFC 1901-1908, 3411-3418)  | TCP/UDP | 161/162     | SNMP is used by network administrators as a method of network management. SNMP has a number of different abilities including the ability to monitor, configure and control network devices. SNMP traps can also be configured on network devices to notify a central server when specific actions are occurring. Typically, these are configured to be used when an alerting condition is happening. In this situation, the device will send a trap to network management stating that an event has occurred and that the device should be looked at further for a source to the event.                                        |
| Border Gateway Protocol (BGP) (RFC 4271)                              | TCP     | 179         | BGP version 4 is widely used on the public internet and by Internet Service Providers (ISP) to maintain very large routing tables and traffic processing. BGP is one of the few protocols that have been designed to deal with the astronomically large routing tables that must exist on the public Internet.                                                                                                                                                                                                                                                                                                                 |
| Lightweight Directory Access Protocol (LDAP) (RFC 4510)               | TCP/UDP | 389         | LDAP provides a mechanism of accessing and maintaining distributed directory information. LDAP is based on the ITU-T X.500 standard but has been simplified and altered to work over TCP/IP networks.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Hypertext Transfer Protocol over SSL/TLS (HTTPS) (RFC 2818)           | TCP     | 443         | HTTPS is used in conjunction with HTTP to provide the same services but doing it using a secure connection which is provided by either SSL or TLS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Lightweight Directory Access Protocol over TLS/SSL (LDAPS) (RFC 4513) | TCP/UDP | 636         | Just like HTTPS, LDAPS provides the same function as LDAP but over a secure connection which is provided by either SSL or TLS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| FTP over TLS/SSL (RFC 4217)                                           | TCP     | 989/990     | Again, just like the previous two entries, FTP over TLS/SSL uses the FTP protocol which is then secured using either SSL or TLS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## Network Devices

[There are many types of systems that are used for network communication](https://www.techtarget.com/searchnetworking/tip/An-introduction-to-8-types-of-network-devices).
Both physical and digital network devices play two roles. The first is establishing a network connection, as a router or
a modem does. The second one is maintaining, protecting and enhancing that connection, as with a hub, repeater, switch
or gateway. Many types of network devices go into creating a network. Some are necessary for connections, while others
are enhancers. Below is a list of network devices that can play a role in enabling the transfer of information as
securely as possible:

- **Switches**
- **Bridges**
- **Routers**
- **Firewalls**
- **Hubs**
- **Modems**
- **Network interface cards (NICs)**

### Switches

[A network switch is a multiport device that improves network efficiency](https://www.techtarget.com/searchnetworking/definition/switch). Switches
maintain limited routing information about nodes in the internal network, allowing connections to systems like hubs or
routers. Switches can be hardware devices that manage physical networks or software-based virtual devices. Generally,
switches read the hardware addresses of incoming packets to transmit them to the appropriate destination.

A network switch operates on the data-link layer, or Layer 2, of the Open Systems Interconnection
([OSI](https://www.techtarget.com/searchnetworking/definition/OSI)) model. In a local area network
([LAN](https://www.techtarget.com/searchnetworking/definition/local-area-network-LAN)) using
[Ethernet](https://www.techtarget.com/searchnetworking/definition/Ethernet), a network switch determines where to send
each incoming message frame by looking at the media access control
([MAC](https://www.techtarget.com/searchnetworking/definition/MAC-address)) address. Switches maintain tables that match
each MAC address to the port receiving the MAC address.

There are
[several types of switches](https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/understanding-the-different-types-of-network-switches.html#~types-of-switches)
in networking:

- **Virtual switches** are software-only switches instantiated inside VM hosting environments.
- **Routing switches** connect LANs. In addition to doing MAC-based Layer 2 switching, they perform routing functions at
  OSI Layer 3 ([network layer](https://www.techtarget.com/searchnetworking/definition/Network-layer)), directing traffic
  based on the [IP address](https://www.techtarget.com/whatis/definition/IP-address) in each packet.
- **Managed switches** let a user adjust each port on the switch. This enables monitoring and configuration changes.
- **Unmanaged switches** enable Ethernet devices to pass data automatically using auto negotiation, which determines
  parameters such as data rate. The configuration is fixed and cannot be edited.
- **Smart switches** can be configured to enable more control over data transmissions, but they have more limitations
  compared to managed switches. Smart switches are also known as _partially managed switches_.
- **Stackable switches** are fixed switches that may be connected to one another via a backplane cable interface to form
  a single logical switch from two or more physical switches.
- **Modular switches** are switch cards for modular or chassis-based switches and can be inserted into a sizable,
  fixed-form factor chassis that can accommodate two or more cards. Since switch interfaces can be changed as needed,
  this kind of switch gives the greatest flexibility and upgradeability.

### Bridges

[Bridges](https://www.techtarget.com/searchsecurity/definition/bridge) connect two or more hosts or network segments by
storing or hosting frames between them. It is designed to connect networks at Open Systems Interconnection
([OSI](https://www.techtarget.com/searchnetworking/definition/OSI)) Level 2, which is the
[data link layer](https://www.techtarget.com/searchnetworking/definition/Data-Link-layer) of a local area network
([LAN](https://www.techtarget.com/searchnetworking/definition/local-area-network-LAN)). Bridges use hardware MAC
addresses for transferring frames.

Bridges can be set up
using [two models](https://t4tutorials.com/bridge-types-local-remote-transparent-translational-source-route-advantages/#:~:text=Local%20bridging%20is%20created%20by%20connecting%20the%20LANs,connects%20one%20or%20more%20LAN%20through%20a%20WAN.):

- **Local bridging** establishes LAN connections with local cables.
- **Remote bridging** brings two connections together via a
  [wide area network](https://www.techtarget.com/searchnetworking/definition/WAN-wide-area-network) (WAN).

In today's network applications, local bridging is the most common model, used in both
[data centers](https://www.techtarget.com/searchdatacenter/definition/data-center) as well as departmental and branch
applications. A simple bridge forwards all packets it receives, which means that there is no actual segmentation and
that traffic growth problems are inevitable. To prevent this, advanced bridges, such as transparent and source-routing
bridges, use a forwarding table to identify the path from the LAN where a packet originates to the bridged LAN where the
destination resides, and send only to the destination LAN segment. If multiple paths exist, this can create a loop where
packets multiply until they use all LAN capacity. Early models of bridging used a
[spanning tree](https://www.techtarget.com/searchnetworking/definition/spanning-tree-protocol) algorithm to detect the
best path to cover all possible destinations and eliminate loops.

The modern approach is to use multiport bridging, which detects complex bridging configurations where LANs have multiple
possible bridge connections between them, making it a "shortest path" specification. This is the best approach to
creating a resilient bridged network.

### Routers

[The main job of a router is to direct traffic](https://www.techtarget.com/searchnetworking/definition/router). Routers
inspect a given data [packet](https://www.techtarget.com/searchnetworking/definition/packet-loss)'s destination Internet
Protocol address (IP address), and transfer packets to their destinations by charting a path through interconnected
networking devices using different network topologies. It calculates the best way for it to reach its destination and
then forwards it accordingly. Routers are a common type of
[gateway](https://internetofthingsagenda.techtarget.com/definition/gateway), and are intelligent devices that store
information about their connected networks. In the Open Systems Interconnection
([OSI](https://www.techtarget.com/searchnetworking/definition/OSI)) model, routers are associated with the
[network layer](https://www.techtarget.com/searchnetworking/definition/Network-layer) (Layer 3).

Although routers can certainly connect IP subnets that are using the same topology, it’s also common to use routers to
connect different types of networks together. For example, the interfaces on a router might connect LAN, WAN, copper,
and fiber connections all in one single device. Such routers are known as **border routers**; they serve as the outside
connection of a LAN to a WAN and operate at the border of your network.

Routers usually communicate routing and other information using one of three standard protocols:

- **Open Shortest Path First
  ([OSPF](https://www.techtarget.com/searchnetworking/definition/OSPF-Open-Shortest-Path-First))** -- used to find the
  best path for packets as they pass through a set of connected networks. OSPF is designated by the Internet Engineering
  Task Force (IETF) as one of several Interior Gateway Protocols (IGPs).
- **Border Gateway Protocol
  ([BGP](https://www.techtarget.com/searchnetworking/definition/BGP-Border-Gateway-Protocol))** -- manages how packets
  are routed across the internet through the exchange of information between edge routers. BGP offers network stability
  that guarantees routers can quickly adapt to send packets through another reconnection if one internet path goes down.
- **Routing Information Protocol
  ([RIP](https://www.techtarget.com/searchnetworking/definition/Routing-Information-Protocol))** -- the original
  protocol for defining how routers should share information when moving traffic among an interconnected group of local
  area networks. The largest number of hops allowed for RIP is 15, which limits the size of networks that RIP can
  support.

Routers act as your first line of defense. You must configure them to pass only traffic authorized by network
administrators. The routers themselves are configured as static or dynamic:

- **Static routers** can only be configured manually and stay that way until changed.
- **Dynamic routers** use information about nearby routers to build their routing tables.

### Firewalls

[A firewall restricts the internet traffic of a private network, controlling what goes in and out](https://www.techtarget.com/searchsecurity/definition/firewall).
It inspects incoming and outgoing traffic using a set of security rules to identify and block threats., either
whitelists or blacklists. **Whitelists** only allow information that falls within a certain set of parameters, while
**blacklists** deny all information that falls inside the parameters.

Several types of firewalls exist, and which one is right for you depends on your operation. Some of the most common
firewall types include:

- **Packet-filtering firewalls** examine data packets in isolation and don't know the packet's context.
- **Stateful inspection firewalls** examine network traffic to determine whether one packet is related to another
  packet.
- **Circuit-level gateway firewalls** provide security by monitoring
  [TCP](https://www.techtarget.com/searchnetworking/definition/TCP) handshaking between packets from trusted clients or
  servers to untrusted hosts and vice versa.
- **Proxy firewalls**, or **application-level gateways,** inspect packets at the application layer of the Open Systems
  Interconnection ([OSI](https://www.techtarget.com/searchnetworking/definition/OSI)) reference model.
- **Next-generation firewalls (NGFWs)** use a multilayered approach to integrate enterprise firewall capabilities with
  an IPS and application control.
- **Threat-focused NGFWs**
  [combine traditional firewall technology](https://www.techtarget.com/searchsecurity/feature/Introduction-to-next-generation-firewalls-in-the-enterprise)
  with enhanced functionality to thwart modern threats, including application layer and advanced malware attacks.
- **Virtual firewalls**, or cloud firewalls, provide traffic filtering and monitoring for virtual machines
  ([VMs](https://www.techtarget.com/searchitoperations/definition/virtual-machine-VM)) in a virtualized environment.
- **Cloud-native firewalls** provide automated scaling features that enable networking and security operations teams to
  run at fast speeds.

Any type of firewall is helpful, but packet filtering is the most basic. Since those TCP and UDP ports operate at layer
4 of the OSI model, it’s common to refer to firewalls like this as an OSI Layer 4 device. These days it’s increasingly
common to see firewalls that understand application layer traffic, and in those cases, the firewall would be a layer 7
device. Some firewalls can also act as a proxy.

If someone is browsing a site on the internet, the firewall will stop that communication. It will perform the browsing
for the user, receive the response from that device over the internet, examine and make sure that nothing inside of that
traffic may be dangerous or malicious, and then send the results of that query back to the user.

### Hubs

[Hubs connect multiple computer networking devices](https://www.techtarget.com/searchnetworking/definition/hub), working
only on the Physical layer of the OSI. It broadcasts data to every computer or Ethernet-based device connected to it,
and do not perform packet filtering or addressing functions. Instead, they send data packets to all connected devices. A
hub also acts as a repeater, and may be referred to as a multi-port repeater, amplifying signals that deteriorate after
traveling long distances over connecting cables. A hub is the most straightforward network connecting device because it
connects LAN components with identical protocols.

A hub can be used with digital and analog data, provided its settings are configured to prepare for the formatting of
the incoming data. Any data that’s going into one interface on this hub will automatically be copied and sent to all of
the other interfaces on this hub. As you can imagine, this is not the most efficient way to communicate. For example, if
the incoming data is in digital format, the hub must pass it on as packets, but if the incoming data is analog, it
passes it on in signal form.

Since everything is being re-transmitted to every other interface on this device, as you put more of a load and add more
devices to the network, the performance of this device tends to get slower and slower. That’s one of the reasons we
decided to change from a hub based network to something more intelligent like a switch based network.

There are two types of hubs:

- A **simple hub** has only one port for connecting a device to other networks.
- **Multiple-port hubs** allow users to connect many devices, and some expand modularly.

There are also active and passive hubs. **Active hubs** boost the signal, as a repeater would, while **passive hubs**
have no boosting capabilities. These devices are a bit outdated for our modern networks, and if you do find a hub,
you’ll find that they are only available in 10 megabit and 100 megabit speeds.

### Modems

A modem (modulator-demodulator) converts digital signals into analog signals of different frequencies and transmits them
to a modem at the receiving location. The main purpose of a modem is to
[modulate](https://www.techtarget.com/searchnetworking/definition/modulation) and demodulate or convert signals between
devices, such as analog to digital. Nowadays, the most common type of modem is an internet modem, which facilitates
internet access by receiving signals from an ISP and converting them into a format that connected devices can use, such
as radio or digital signals. The digital data is usually transferred to or from the modem over a serial line through an
industry-standard interface, RS-232.

There are three main types of modems:

- A **DSL modem** uses telephone cables and is considered the slowest connection.
- A **cable modem** transmits information over TV lines and is faster than DSL.
- A **wireless modem** transfers information between the local network and an internet service provider; it is the
  fastest transmitter.

A modem typically connects to a router, which receives internet access from the modem and sends it to other devices on
the network. Modems can use Ethernet cable, DSL, fiber or wireless mediums for connectivity. Depending on the type, a
modem operates at Layer 1 or Layer 2 of the OSI model.

### Network interface cards (NICs)

[A network interface card is an internal hardware chip that connects a device to the internet](https://www.techtarget.com/searchnetworking/definition/network-interface-card).
At the TCP/IP layer, the NIC connects a device to a network. At the physical layer, the NIC transmits a signal that
sends information to the network layer. Then all data passes through the NIC to the server and back to the device.

There
are [two main types](https://community.fs.com/blog/nic-card-guide-for-beginners-functions-types-and-selection-tips.html)
of NICs:

- An **Ethernet NIC** comes with an 8P8C socket for connecting an ethernet cable.
- A **Wi-Fi NIC** connects to a wireless network.

Mobile devices have only a wireless NIC, but most computers still incorporate an Ethernet chip. Ethernet ports are more
reliable but limit a user’s mobility while handling the device. This is a network interface card you would plug into a
server and this card has four separate ethernet connectors on the back. But if you have a laptop or desktop computer
with an ethernet interface, that also is a network interface card. So whether you need copper connectivity, fiber
connectivity, or anything in between, you will need a network interface card on your device to make that connection to
the rest of the network.

### Software defined networking (SDN)

[Software Defined Networking or SDN](https://www.techtarget.com/searchnetworking/definition/software-defined-networking-SDN)
takes the networking devices like switches, routers, firewalls and other devices to be a software based platform that we
could use in the cloud. This means that we might take something like a switch and separate all of the functions of the
switch into individual pieces. We can then take these pieces and then create software versions to make networks agile
and flexible in order to respond quickly to changing business requirements.

There are commonly three layers or three ways to separate these devices so that we can create some consistency across
all of these networking components. The first layer would be the infrastructure layer. Sometimes we hear this referred
to as the data plane of that device. So it’s common that this data plane would do the forwarding, the trunking, the
encrypting, the network address translation, or anything else that needs to occur at that packet level.

A typical representation of SDN architecture comprises three layers: the application layer, the control layer and the
infrastructure layer.

#### Application layer

The application layer contains the typical network applications or functions organizations use. This can include
intrusion detection systems, load balancing or firewalls. Where a traditional network would use a specialized appliance,
such as a firewall or load balancer, a software-defined network replaces the appliance with an application that uses a
controller to manage [data plane](https://www.techtarget.com/searchnetworking/definition/data-plane-DP) behavior.

#### Control layer

The control layer represents the centralized SDN controller software that acts as the brain of the software-defined
network. This controller resides on a server and manages policies and traffic flows throughout the network.

#### Infrastructure layer

The infrastructure layer is made up of the physical switches in the network. These switches forward the network traffic
to their destinations.

#### APIs

These three layers communicate using respective
[northbound and southbound](https://www.techtarget.com/whatis/definition/northbound-interface-southbound-interface)
[APIs](https://www.techtarget.com/searchapparchitecture/definition/application-program-interface-API). Applications talk
to the controller through its northbound interface. The controller and switches communicate using southbound interfaces,
such as [OpenFlow](https://www.techtarget.com/whatis/definition/OpenFlow), although other protocols exist.

There is currently no formal standard for the controller's northbound API to match OpenFlow as a general southbound
interface. It is likely the OpenDaylight controller's northbound API may emerge as a de facto standard over time, given
its broad vendor support.

## Wireless Networks

## Network Services

## Network Configurations

## Network Connections

## Internet Connections

## Network Tools
