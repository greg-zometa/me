---
title: Network Devices
description: Learn about networking devices and how they connect network infrastructures.
pubDatetime: 2023-08-03T04:03:27.106Z
directory: comptia
postSlug: networking-devices
dynamicOgImg: https://images.unsplash.com/photo-1606420187127-dae7c868fa7a
tags:
  - a-plus
  - core-1
  - networking
  - certification
  - studying
---

This post will cover various aspects of the **Networking** section of the [CompTIA A+](https://www.comptia.org/certifications/a) Core 1 certification endeavor.

## Table of contents

## Overview

[There are many types of systems that are used for network communication](https://www.techtarget.com/searchnetworking/tip/An-introduction-to-8-types-of-network-devices). Both physical and digital network devices play two roles. The first is establishing a network connection, as a router or a modem does. The second one is maintaining, protecting and enhancing that connection, as with a hub, repeater, switch or gateway. Many types of network devices go into creating a network. Some are necessary for connections, while others are enhancers. Below is a list of network devices that can play a role in enabling the transfer of information as securely as possible:

- **Switches**
- **Bridges**
- **Routers**
- **Firewalls**
- **Hubs**
- **Modems**
- **Network interface cards (NICs)**

## Switches

[A network switch is a multiport device that improves network efficiency](https://www.techtarget.com/searchnetworking/definition/switch). Switches maintain limited routing information about nodes in the internal network, allowing connections to systems like hubs or routers. Switches can be hardware devices that manage physical networks or software-based virtual devices. Generally, switches read the hardware addresses of incoming packets to transmit them to the appropriate destination.

A network switch operates on the data-link layer, or Layer 2, of the Open Systems Interconnection ([OSI](https://www.techtarget.com/searchnetworking/definition/OSI)) model. In a local area network ([LAN](https://www.techtarget.com/searchnetworking/definition/local-area-network-LAN)) using [Ethernet](https://www.techtarget.com/searchnetworking/definition/Ethernet), a network switch determines where to send each incoming message frame by looking at the media access control ([MAC](https://www.techtarget.com/searchnetworking/definition/MAC-address)) address. Switches maintain tables that match each MAC address to the port receiving the MAC address.

There are [several types of switches](https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/understanding-the-different-types-of-network-switches.html#~types-of-switches) in networking:

- **Virtual switches** are software-only switches instantiated inside VM hosting environments.
- **Routing switches** connect LANs. In addition to doing MAC-based Layer 2 switching, they perform routing functions at OSI Layer 3 ([network layer](https://www.techtarget.com/searchnetworking/definition/Network-layer)), directing traffic based on the [IP address](https://www.techtarget.com/whatis/definition/IP-address) in each packet.
- **Managed switches** let a user adjust each port on the switch. This enables monitoring and configuration changes.
- **Unmanaged switches** enable Ethernet devices to pass data automatically using auto negotiation, which determines parameters such as data rate. The configuration is fixed and cannot be edited.
- **Smart switches** can be configured to enable more control over data transmissions, but they have more limitations compared to managed switches. Smart switches are also known as _partially managed switches_.
- **Stackable switches** are fixed switches that may be connected to one another via a backplane cable interface to form a single logical switch from two or more physical switches.
- **Modular switches** are switch cards for modular or chassis-based switches and can be inserted into a sizable, fixed-form factor chassis that can accommodate two or more cards. Since switch interfaces can be changed as needed, this kind of switch gives the greatest flexibility and upgradeability.

## Bridges

[Bridges](https://www.techtarget.com/searchsecurity/definition/bridge) connect two or more hosts or network segments by storing or hosting frames between them. It is designed to connect networks at Open Systems Interconnection ([OSI](https://www.techtarget.com/searchnetworking/definition/OSI)) Level 2, which is the [data link layer](https://www.techtarget.com/searchnetworking/definition/Data-Link-layer) of a local area network ([LAN](https://www.techtarget.com/searchnetworking/definition/local-area-network-LAN)). Bridges use hardware MAC addresses for transferring frames.

Bridges can be set up using [two models](https://t4tutorials.com/bridge-types-local-remote-transparent-translational-source-route-advantages/#:~:text=Local%20bridging%20is%20created%20by%20connecting%20the%20LANs,connects%20one%20or%20more%20LAN%20through%20a%20WAN.):

- **Local bridging** establishes LAN connections with local cables.
- **Remote bridging** brings two connections together via a [wide area network](https://www.techtarget.com/searchnetworking/definition/WAN-wide-area-network) (WAN).

In today's network applications, local bridging is the most common model, used in both [data centers](https://www.techtarget.com/searchdatacenter/definition/data-center) as well as departmental and branch applications. A simple bridge forwards all packets it receives, which means that there is no actual segmentation and that traffic growth problems are inevitable. To prevent this, advanced bridges, such as transparent and source-routing bridges, use a forwarding table to identify the path from the LAN where a packet originates to the bridged LAN where the destination resides, and send only to the destination LAN segment. If multiple paths exist, this can create a loop where packets multiply until they use all LAN capacity. Early models of bridging used a [spanning tree](https://www.techtarget.com/searchnetworking/definition/spanning-tree-protocol) algorithm to detect the best path to cover all possible destinations and eliminate loops.

The modern approach is to use multiport bridging, which detects complex bridging configurations where LANs have multiple possible bridge connections between them, making it a "shortest path" specification. This is the best approach to creating a resilient bridged network.

## Routers

[The main job of a router is to direct traffic](https://www.techtarget.com/searchnetworking/definition/router). Routers inspect a given data [packet](https://www.techtarget.com/searchnetworking/definition/packet-loss)'s destination Internet Protocol address (IP address), and transfer packets to their destinations by charting a path through interconnected networking devices using different network topologies. It calculates the best way for it to reach its destination and then forwards it accordingly. Routers are a common type of [gateway](https://internetofthingsagenda.techtarget.com/definition/gateway), and are intelligent devices that store information about their connected networks. In the Open Systems Interconnection ([OSI](https://www.techtarget.com/searchnetworking/definition/OSI)) model, routers are associated with the [network layer](https://www.techtarget.com/searchnetworking/definition/Network-layer) (Layer 3).

Although routers can certainly connect IP subnets that are using the same topology, it’s also common to use routers to connect different types of networks together. For example, the interfaces on a router might connect LAN, WAN, copper, and fiber connections all in one single device. Such routers are known as **border routers**; they serve as the outside connection of a LAN to a WAN and operate at the border of your network.

Routers usually communicate routing and other information using one of three standard protocols:

- **Open Shortest Path First ([OSPF](https://www.techtarget.com/searchnetworking/definition/OSPF-Open-Shortest-Path-First))** — used to find the best path for packets as they pass through a set of connected networks. OSPF is designated by the Internet Engineering Task Force (IETF) as one of several Interior Gateway Protocols (IGPs).
- **Border Gateway Protocol ([BGP](https://www.techtarget.com/searchnetworking/definition/BGP-Border-Gateway-Protocol))** — manages how packets are routed across the internet through the exchange of information between edge routers. BGP offers network stability that guarantees routers can quickly adapt to send packets through another reconnection if one internet path goes down.
- **Routing Information Protocol ([RIP](https://www.techtarget.com/searchnetworking/definition/Routing-Information-Protocol))** — the original protocol for defining how routers should share information when moving traffic among an interconnected group of local area networks. The largest number of hops allowed for RIP is 15, which limits the size of networks that RIP can support.

Routers act as your first line of defense. You must configure them to pass only traffic authorized by network administrators. The routers themselves are configured as static or dynamic:

- **Static routers** can only be configured manually and stay that way until changed.
- **Dynamic routers** use information about nearby routers to build their routing tables.

## Firewalls

[A firewall restricts the internet traffic of a private network, controlling what goes in and out](https://www.techtarget.com/searchsecurity/definition/firewall). It inspects incoming and outgoing traffic using a set of security rules to identify and block threats., either whitelists or blacklists. **Whitelists** only allow information that falls within a certain set of parameters, while **blacklists** deny all information that falls inside the parameters.

Several types of firewalls exist, and which one is right for you depends on your operation. Some of the most common firewall types include:

- **Packet-filtering firewalls** examine data packets in isolation and don't know the packet's context.
- **Stateful inspection firewalls** examine network traffic to determine whether one packet is related to another packet.
- **Circuit-level gateway firewalls** provide security by monitoring [TCP](https://www.techtarget.com/searchnetworking/definition/TCP) handshaking between packets from trusted clients or servers to untrusted hosts and vice versa.
- **Proxy firewalls**, or **application-level gateways,** inspect packets at the application layer of the Open Systems Interconnection ([OSI](https://www.techtarget.com/searchnetworking/definition/OSI)) reference model.
- **Next-generation firewalls (NGFWs)** use a multilayered approach to integrate enterprise firewall capabilities with an IPS and application control.
- **Threat-focused NGFWs** [combine traditional firewall technology](https://www.techtarget.com/searchsecurity/feature/Introduction-to-next-generation-firewalls-in-the-enterprise) with enhanced functionality to thwart modern threats, including application layer and advanced malware attacks.
- **Virtual firewalls**, or cloud firewalls, provide traffic filtering and monitoring for virtual machines ([VMs](https://www.techtarget.com/searchitoperations/definition/virtual-machine-VM)) in a virtualized environment.
- **Cloud-native firewalls** provide automated scaling features that enable networking and security operations teams to run at fast speeds.

Any type of firewall is helpful, but packet filtering is the most basic. Since those TCP and UDP ports operate at layer 4 of the OSI model, it’s common to refer to firewalls like this as an OSI Layer 4 device. These days it’s increasingly common to see firewalls that understand application layer traffic, and in those cases, the firewall would be a layer 7 device. Some firewalls can also act as a proxy.

If someone is browsing a site on the internet, the firewall will stop that communication. It will perform the browsing for the user, receive the response from that device over the internet, examine and make sure that nothing inside of that traffic may be dangerous or malicious, and then send the results of that query back to the user.

## Hubs

[Hubs connect multiple computer networking devices](https://www.techtarget.com/searchnetworking/definition/hub), working only on the Physical layer of the OSI. It broadcasts data to every computer or Ethernet-based device connected to it, and do not perform packet filtering or addressing functions. Instead, they send data packets to all connected devices. A hub also acts as a repeater, and may be referred to as a multi-port repeater, amplifying signals that deteriorate after traveling long distances over connecting cables. A hub is the most straightforward network connecting device because it connects LAN components with identical protocols.

A hub can be used with digital and analog data, provided its settings are configured to prepare for the formatting of the incoming data. Any data that’s going into one interface on this hub will automatically be copied and sent to all of the other interfaces on this hub. As you can imagine, this is not the most efficient way to communicate. For example, if the incoming data is in digital format, the hub must pass it on as packets, but if the incoming data is analog, it passes it on in signal form.

Since everything is being re-transmitted to every other interface on this device, as you put more of a load and add more devices to the network, the performance of this device tends to get slower and slower. That’s one of the reasons we decided to change from a hub based network to something more intelligent like a switch based network.

There are two types of hubs:

- A **simple hub** has only one port for connecting a device to other networks.
- **Multiple-port hubs** allow users to connect many devices, and some expand modularly.

There are also active and passive hubs. **Active hubs** boost the signal, as a repeater would, while **passive hubs** have no boosting capabilities. These devices are a bit outdated for our modern networks, and if you do find a hub, you’ll find that they are only available in 10 megabit and 100 megabit speeds.

## Modems

A modem (modulator-demodulator) converts digital signals into analog signals of different frequencies and transmits them to a modem at the receiving location. The main purpose of a modem is to [modulate](https://www.techtarget.com/searchnetworking/definition/modulation) and demodulate or convert signals between devices, such as analog to digital. Nowadays, the most common type of modem is an internet modem, which facilitates internet access by receiving signals from an ISP and converting them into a format that connected devices can use, such as radio or digital signals. The digital data is usually transferred to or from the modem over a serial line through an industry-standard interface, RS-232.

There are three main types of modems:

- A **DSL modem** uses telephone cables and is considered the slowest connection.
- A **cable modem** transmits information over TV lines and is faster than DSL.
- A **wireless modem** transfers information between the local network and an internet service provider; it is the fastest transmitter.

A modem typically connects to a router, which receives internet access from the modem and sends it to other devices on the network. Modems can use Ethernet cable, DSL, fiber or wireless mediums for connectivity. Depending on the type, a modem operates at Layer 1 or Layer 2 of the OSI model.

## Network interface cards (NICs)

[A network interface card is an internal hardware chip that connects a device to the internet](https://www.techtarget.com/searchnetworking/definition/network-interface-card). At the TCP/IP layer, the NIC connects a device to a network. At the physical layer, the NIC transmits a signal that sends information to the network layer. Then all data passes through the NIC to the server and back to the device.

There are [two main types](https://community.fs.com/blog/nic-card-guide-for-beginners-functions-types-and-selection-tips.html) of NICs:

- An **Ethernet NIC** comes with an 8P8C socket for connecting an ethernet cable.
- A **Wi-Fi NIC** connects to a wireless network.

Mobile devices have only a wireless NIC, but most computers still incorporate an Ethernet chip. Ethernet ports are more reliable but limit a user’s mobility while handling the device. This is a network interface card you would plug into a server and this card has four separate ethernet connectors on the back. But if you have a laptop or desktop computer with an ethernet interface, that also is a network interface card. So whether you need copper connectivity, fiber connectivity, or anything in between, you will need a network interface card on your device to make that connection to the rest of the network.

## Software defined networking (SDN)

[Software Defined Networking or SDN](https://www.techtarget.com/searchnetworking/definition/software-defined-networking-SDN) takes the networking devices like switches, routers, firewalls and other devices to be a software based platform that we could use in the cloud. This means that we might take something like a switch and separate all of the functions of the switch into individual pieces. We can then take these pieces and then create software versions to make networks agile and flexible in order to respond quickly to changing business requirements.

There are commonly three layers or three ways to separate these devices so that we can create some consistency across all of these networking components. The first layer would be the infrastructure layer. Sometimes we hear this referred to as the data plane of that device. So it’s common that this data plane would do the forwarding, the trunking, the encrypting, the network address translation, or anything else that needs to occur at that packet level.

A typical representation of SDN architecture comprises three layers: the application layer, the control layer and the infrastructure layer.

### Application layer

The application layer contains the typical network applications or functions organizations use. This can include intrusion detection systems, load balancing or firewalls. Where a traditional network would use a specialized appliance, such as a firewall or load balancer, a software-defined network replaces the appliance with an application that uses a controller to manage [data plane](https://www.techtarget.com/searchnetworking/definition/data-plane-DP) behavior.

### Control layer

The control layer represents the centralized SDN controller software that acts as the brain of the software-defined network. This controller resides on a server and manages policies and traffic flows throughout the network.

### Infrastructure layer

The infrastructure layer is made up of the physical switches in the network. These switches forward the network traffic to their destinations.

### APIs

These three layers communicate using respective [northbound and southbound](https://www.techtarget.com/whatis/definition/northbound-interface-southbound-interface) [APIs](https://www.techtarget.com/searchapparchitecture/definition/application-program-interface-API). Applications talk to the controller through its northbound interface. The controller and switches communicate using southbound interfaces, such as [OpenFlow](https://www.techtarget.com/whatis/definition/OpenFlow), although other protocols exist.

There is currently no formal standard for the controller's northbound API to match OpenFlow as a general southbound interface. It is likely the OpenDaylight controller's northbound API may emerge as a de facto standard over time, given its broad vendor support.
