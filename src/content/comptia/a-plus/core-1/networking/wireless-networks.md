---
title: Wireless Networks
description: Learn about the different types of wireless networks to connect devices and their standards.
pubDatetime: 2023-08-04T05:56:27.316Z
postSlug: networking-wireless-protocols
dynamicOgImg: https://images.unsplash.com/photo-1561474119-1b76f3a79816
tags:
  - comptia
  - a-plus
  - core-1
  - networking
  - certification
  - studying
---

This post will cover various aspects of the **Networking** section of the [CompTIA A+](https://www.comptia.org/certifications/a) Core 1 certification endeavor.

## Table of contents

## Overview

The standards for networking standards come from the [IEEE 802 committee](https://www.techtarget.com/searchnetworking/reference/IEEE-802-Wireless-Standards-Fast-Reference). These specifications apply to local area networks ([LANs](https://www.techtarget.com/searchnetworking/definition/local-area-network-LAN)) and metropolitan area networks ([MANs](https://www.techtarget.com/searchnetworking/definition/metropolitan-area-network-MAN)). Without these standards, it would be much more difficult to connect to systems not using the same set of networking equipment. Standardizing protocols helps ensure multiple types of devices can connect to multiple network types. It also helps make sure network management isn't the challenge it could be if standards weren't in place.

Better-known specifications include [802.3 Ethernet](https://www.techtarget.com/searchnetworking/definition/8023), [802.11](https://www.techtarget.com/searchmobilecomputing/definition/80211) Wi-Fi and 802.15 Bluetooth/Zigbee. However, some of these standards have been labeled as disbanded or hibernating, and are either superseded by newer standards or being reworked. Using an open process, the LAN/MAN Standards Committee (LMSC) advocates for these standards globally.

**This table displays the working groups of the 802 specifications**:

| 802       | Overview                                       | Basics of physical and logical networking concepts                                                                                                                                                                                                                                                                                                        |
| --------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 802.1     | Bridging                                       | LAN/MAN bridging and management. Covers management and the lower sublayers of OSI Layer 2, including MAC-based bridging, virtual LANs and port-based access control. Also contains the Time-Sensitive Networking Task Group.                                                                                                                              |
| 802.2     | Logical link control                           | Disbanded                                                                                                                                                                                                                                                                                                                                                 |
| 802.3     | Ethernet                                       | The grandfather of the 802 specifications. Provides asynchronous networking using carrier sense, multiple access with collision detect (CSMA/CD) over coax, twisted-pair copper and optical fiber media. Current speeds range from 10 Mbps to 10 Gbps.                                                                                                    |
| 802.4     | Token bus                                      | Disbanded                                                                                                                                                                                                                                                                                                                                                 |
| 802.5     | Token ring                                     | Disbanded                                                                                                                                                                                                                                                                                                                                                 |
| 802.6     | Distributed queue dual bus                     | Superseded. Revision of 802.1D, superseded by 802.1D-2004.                                                                                                                                                                                                                                                                                                |
| 802.7     | Broadband LAN practices                        | Disbanded                                                                                                                                                                                                                                                                                                                                                 |
| 802.8     | Fiber optic practices                          | Disbanded                                                                                                                                                                                                                                                                                                                                                 |
| 802.9     | Integrated services LAN                        | Disbanded                                                                                                                                                                                                                                                                                                                                                 |
| 802.10    | Interoperable LAN security                     | Disbanded                                                                                                                                                                                                                                                                                                                                                 |
| 802.11    | Wi-Fi                                          | Wireless LAN MAC and physical layer specification. 802.11a, b, g, ax, etc., are amendments to the original 802.11 standard. Products that implement 802.11 standards must pass tests and are referred to as Wi-Fi certified.                                                                                                                              |
| 802.11a   |                                                | Specifies a physical layer that operates in the 5 GHz U-NII band in the U.S. -- initially 5.15 GHz to 5.35 GHz and 5.725 GHz to 5.85 GHz -- and since expanded to additional frequencies. Uses orthogonal frequency-division multiplexing (OFDM). Enhanced data speed to 54 Mbps. Ratified after 802.11b.                                                 |
| 802.11b   |                                                | Enhancement to 802.11 that added higher data rate modes to direct-sequence spread spectrum already defined in the original 802.11 standard. Boosted data speed to 11 Mbps. 22 MHz bandwidth yields three nonoverlapping channels within the frequency range of 2.400 GHz to 2.4835 GHz. Beacons at 1 Mbps fall back to 5.5, 2 or 1 Mbps from 11 Mbps max. |
| 802.11d   |                                                | Enhancement to 802.11a and 802.11b that enables global roaming. Particulars can be set at the MAC layer.                                                                                                                                                                                                                                                  |
| 802.11e   |                                                | Enhancement to 802.11 that includes quality of service features. Facilitates prioritization of data, voice and video transmissions.                                                                                                                                                                                                                       |
| 802.11g   |                                                | Extends the maximum data rate of wireless LAN devices that operate in the 2.4 GHz band, in a fashion that permits interoperation with 802.11b devices. Uses OFDM modulation. Operates at up to 54 Mbps, with fallback speeds that include the b speeds.                                                                                                   |
| 802.11h   |                                                | Enhancement to 802.11a that resolves interference issues. Dynamic frequency selection. Transmit power control.                                                                                                                                                                                                                                            |
| 802.11i   |                                                | Enhancement to 802.11 that offers additional security for wireless LAN applications. Defines stronger encryption, authentication and key exchange, as well as options for key caching and pre-authentication.                                                                                                                                             |
| 802.11j   |                                                | Japanese regulatory extensions to 802.11a specification. Frequency range of 4.9 GHz to 5 GHz.                                                                                                                                                                                                                                                             |
| 802.11k   |                                                | Radio resource measurements for networks using 802.11 family specifications                                                                                                                                                                                                                                                                               |
| 802.11m   |                                                | Maintenance of 802.11 family specifications. Corrections and amendments to existing documentation.                                                                                                                                                                                                                                                        |
| 802.11n   |                                                | Higher-speed standards. Several competing and noncompatible technologies; often called pre-n. Top speeds claimed of 108 MHz, 240 MHz and 350+ MHz. Competing proposals come from the groups Enhanced Wireless Consortium, TGn Sync and WWiSE, and are all variations based on multiple input, multiple output, or MIMO.                                   |
| 802.11x   |                                                | Misused generic term for 802.11 family specifications                                                                                                                                                                                                                                                                                                     |
| 802.12    | Demand priority                                | Disbanded                                                                                                                                                                                                                                                                                                                                                 |
| 802.13    | Not used                                       | Not used                                                                                                                                                                                                                                                                                                                                                  |
| 802.14    | Cable modems                                   | Disbanded                                                                                                                                                                                                                                                                                                                                                 |
| 802.15    | Wireless PANs                                  | Communications specification for wireless PANs that IEEE approved in early 2002                                                                                                                                                                                                                                                                           |
| 802.15.1  | Bluetooth                                      | Short-range (10 meters) wireless technology used for cordless mouse, keyboard and wireless headphones at 2.4 GHz                                                                                                                                                                                                                                          |
| 802.15.3a | Ultra wideband                                 | Short-range, high-bandwidth ultra wideband link                                                                                                                                                                                                                                                                                                           |
| 802.15.4  | Zigbee                                         | Short-range wireless sensor networks                                                                                                                                                                                                                                                                                                                      |
| 802.15.5  | Mesh network                                   | Extension of network coverage without increasing the transmit power or the receiver sensitivity. Enhanced reliability via route redundancy. Easier network configuration. Better device battery life.                                                                                                                                                     |
| 802.16    | Wireless MANs                                  | Hibernating. Covers fixed and mobile broadband wireless access methods used to create wireless MANs. Connects base stations to the internet using OFDM in unlicensed (900 MHz, 2.4 GHz, 5.8 GHz) or licensed (700 MHz, 2.5 GHz to 3.6 GHz) frequency bands. Products that implement 802.16 standards can undergo WiMax certification testing.             |
| 802.17    | Resilient packet ring                          | Disbanded                                                                                                                                                                                                                                                                                                                                                 |
| 802.18    | Radio Regulatory Technical Advisory Group      | Supports IEEE 802 LMSC and IEEE 802 wireless working groups. Actively participates in and monitors radio regulatory matters.                                                                                                                                                                                                                              |
| 802.19    | Wireless coexistence                           | Makes standards for coexistence between different wireless standards for unlicensed devices                                                                                                                                                                                                                                                               |
| 802.20    | Mobile broadband wireless access               | Disbanded                                                                                                                                                                                                                                                                                                                                                 |
| 802.21    | Media independent handover                     | Hibernating. Enables optimization of higher-layer services, including internet of things and handover services specifically between IEEE 802 networks.                                                                                                                                                                                                    |
| 802.22    | Wireless regional area network                 | Hibernating. Creates a standard to enable spectrum sharing.                                                                                                                                                                                                                                                                                               |
| 802.23    | Emergency Services Working Group               | Disbanded                                                                                                                                                                                                                                                                                                                                                 |
| 802.24    | Vertical Applications Technical Advisory Group | Focused on application categories that use IEEE 802 standards or multiple working groups. For these, 802.24 acts as a point of contact with other organizations focused on other IEEE 802 standards. 802.24 can also serve as a resource for understanding the IEEE 802 standards by providing white papers and other documents.                          |

IEEE 802 is divided into different parts that cover the physical and [data link](https://www.techtarget.com/searchnetworking/definition/Data-Link-layer) aspects of networking. The LMSC has made more than 70 standards for IEEE 802. Some commonly used standards include those for Ethernet, bridging and virtual bridged LANs, [wireless LANs, wireless MANs, wireless personal area networks](https://www.techtarget.com/searchnetworking/tip/The-4-different-types-of-wireless-networks) (PANs) and radio access networks, as well as media independent handover services.

## 802.11a

[802.11a](https://www.lifewire.com/wireless-standards-802-11a-802-11b-g-n-and-802-11ac-816553#toc-80211a) was one of the first [Wi-Fi](https://www.lifewire.com/what-is-wi-fi-2377430) communication standards created in the [IEEE 802.11 standards](https://www.lifewire.com/wireless-standards-802-11a-802-11b-g-n-and-802-11ac-816553) family. The original [802.11](https://www.lifewire.com/802-11-wireless-network-818282) did not gain widespread deployment due to its excessively slow speed.

802.11a operated in a frequency spectrum of around 5 GHz, supporting a maximum theoretical [bandwidth](https://www.lifewire.com/what-is-bandwidth-2625809) of 54 [Mbps](https://www.lifewire.com/bits-per-second-kbps-mbps-gbps-818122). Although this doesn’t seem very fast now, back in 1999 when this was first released, that was a great deal of speed on a network that suddenly was able to operate wirelessly.

## 802.11b

About the same time that 802.11a was released, the IEEE also finalized the [802.11b](https://www.lifewire.com/wireless-standards-802-11a-802-11b-g-n-and-802-11ac-816553#toc-80211b) standard. This is not an upgrade to the a. Instead this is a completely different standard that operates with different frequencies and different speeds. 802.11b supports a theoretical speed of up to 11 Mbps operating at a frequency spectrum of 2.4 GHz; much slower than the 54Mbps we were able to get with 802.11a.

While 802.11a operated at higher frequencies, the objects around would tend to absorb the signals, whereas with 802.11b they tend to bounce off of those devices. The higher frequency also means 802.11a signals had more difficulty penetrating walls and other obstructions. Thus making the range for 802.11b greater.

## 802.11g

In 2002 and 2003, WLAN products supporting a newer standard called 802.11g emerged. 802.11g attempts to combine the best of both 802.11a and 802.11b. 802.11g supports bandwidth up to 54 Mbps and uses the 2.4 GHz frequency for greater range. 802.11g is backward compatible with 802.11b, meaning that 802.11g access points will work with 802.11b wireless network adapters and vice versa.

- **Pros of 802.11g:** Supported by essentially all wireless devices and network equipment in use today; least expensive option
- **Cons of 802.11g:** Entire network slows to match any 802.11b devices on the network; slowest/oldest standard still in use

## 802.11n

_802.11n_ (also sometimes known as [Wireless 4](https://www.lifewire.com/what-is-wireless-n-818280)) was designed to improve on 802.11g in the bandwidth it supports by using several wireless signals and antennas called _MIMO_ technology or Multiple Input Multiple Output. Industry standards groups ratified 802.11n in 2009 with specifications providing up to 600 Mbps of network bandwidth. 802.11n also offers a somewhat better range over earlier Wi-Fi standards due to its increased signal intensity, and it is backward-compatible with 802.11a/b/g gear.

- **Pros of 802.11n:** Significant bandwidth improvement, up to 40MHz, from previous standards; wide support across devices and network gear (5GHz and 2.4GHz simultaneously)
- **Cons of 802.11n:** More expensive to implement than 802.11g; use of multiple signals may interfere with nearby 802.11b/g based networks

## 802.11ac

The generation of Wi-Fi that first signaled popular use, [802.11ac](https://www.lifewire.com/802-11ac-in-wireless-networking-818284), uses [dual-band wireless](https://www.lifewire.com/dual-band-wireless-networking-explained-818279) technology, supporting simultaneous connections on both 2.4 GHz and 5 GHz Wi-Fi devices. 802.11ac offers backward compatibility to 802.11a/b/g/n and bandwidth rated up to 1300 Mbps on the 5 GHz band plus up to 450 Mbps on 2.4 GHz. Most home wireless routers are compliant with this standard.

802.11ac is the most expensive to implement; performance improvements only noticeable in high-bandwidth applications. We can also use much more of that wireless spectrum simultaneously because 802.11ac will support up to 160 MHz of a channel bandwidth. It not only uses multiple input multiple output, but increases the capabilities of that MIMO by adding multi-user MIMO to allow multiple users to communicate over multiple input and multiple output simultaneously. This standard supports up to eight of those multi-user MIMO streams, which translates into a maximum total throughput of nearly 7GBs per second for 802.11ac.

## 802.11ax

Branded as Wi-Fi 6, the 802.11ax standard went live in 2019 and will replace 802.11ac as the de facto wireless standard. Wi-Fi 6 maxes out at 10 GBps, uses less power, is more reliable in congested environments, and supports better security. The standard also supports many different channel widths. So we can have bandwidth of 20, 40, 80, and 160 MHz for people communicating on that wireless network.

If we look at the standards for 802.11ax, we can get a total throughput per channel of about 1.2 GBps. This is a relatively small increase in throughput when you compare it to other improvements in the standards through the years. But there is a difference in how this particular version was designed. 802.11ax was designed to solve some of the problems we have with using these wireless networks in areas where there are large number of people.

So if you’re at a sporting event or a trade show, you may find it difficult sometimes to communicate over these wireless networks. With 802.11ax, we introduced a new form of communicating called [orthogonal frequency division multiple access](https://www.techtarget.com/searchnetworking/definition/orthogonal-frequency-division-multiple-access-OFDMA) or OFDMA. This takes a type of communication that we’ve used for some time on our cellular networks and brings it into the world of 802.11. This allows us to put 802.11ax networks in places with large numbers of people and be able to communicate without a huge loss in efficiency over those wireless networks.

## 802.11x - in summary

802.11 has a long history from it's first release in the late 90's to as recently as 2019.

**This table displays a quick summary of the 802.11 specifications**:

| Generation  | IEEE Standard | Year Released | Frequency (GHz) | Speed        | Range (Indoor) | Range (Outdoor) |
| ----------- | ------------- | ------------- | --------------- | ------------ | -------------- | --------------- |
| _(Wi-Fi 0)_ | 802.11        | 1997          | 2.4             | 2Mbps        | 20m            | 100m            |
| _(Wi-Fi 2)_ | 802.11a       | 1999          | 5               | 1.5-54Mbps   | 35m            | 120/5000m       |
| _(Wi-Fi 1)_ | 802.11b       | 1999          | 2.4             | 11Mbps       | 35m            | 120m            |
| _(Wi-Fi 3)_ | 802.11g       | 2003          | 2.4             | 54Mbps       | 38m            | 140m            |
| (Wi-Fi 4)   | 802.11n       | 2009          | 2.4/5           | 600Mbps      | 70m            | 250m            |
| (Wi-Fi 5)   | 802.11ac      | 2013          | 2.4/5           | 450/1300Mbps | 35m            | -               |
| (Wi-Fi 6)   | 802.11ax      | 2019          | 2.4/5           | 10-15Gbs     | 30m            | 120m            |

## Fixed wireless

[Fixed wireless networking](https://www.techtarget.com/searchmobilecomputing/definition/fixed-wireless) refers to the operation of [wireless](https://www.techtarget.com/searchmobilecomputing/definition/wireless) devices in fixed locations such as homes and offices. Fixed wireless devices usually derive their electrical power from utility mains, unlike mobile wireless devices, which tend to be battery powered.

Fixed wireless is the typical form of internet deployed in areas with no [fiber internet](https://www.techtarget.com/searchnetworking/definition/fiber-optics-optical-fiber) infrastructure, mainly rural areas. It is broadcast from towers through airwaves to receivers that the [service provider](https://www.techtarget.com/whatis/definition/communication-service-provider-CSP) will have installed on the user's property. For fixed wireless internet connections to work, the receiver needs to be within around 10 miles from the fixed [wireless internet service provider](https://www.techtarget.com/searchmobilecomputing/definition/wireless-ISP)'s tower.

Some of the most important benefits of fixed wireless are as follows:

- Subscribers can be added or moved to a certain extent without modifying the network infrastructure.
- Subscribers in remote areas can be brought into a network without the need for stringing new cables or optical fiber across the countryside.
- Broad bandwidth is possible because there are no wires or cables to introduce [reactance](https://www.techtarget.com/whatis/definition/reactance) into the connection. Reactance limits bandwidth by preventing signals higher than a certain [frequency](https://www.techtarget.com/whatis/definition/frequency) from efficiently propagating.
- As the number of subscribers increases, the connection cost per subscriber goes down making this a more cost-effective option.

Fixed wireless is one method to deliver internet connections to wireless routers, APs or modems used for Wi-Fi, but **it is not a replacement for a Wi-Fi network altogether**. Organizations, businesses or homes that run fixed wireless internet can't automatically connect to the receiver antenna to give their devices internet access. Instead, that fixed wireless receiver has to connect to an internet modem or router, which powers the Wi-Fi network on which devices connect.

## Radio frequency identification

[Radio frequency identification (RFID)](https://www.techtarget.com/iotagenda/definition/RFID-radio-frequency-identification) uses close to the same technology as NFC, but allows further communication.

There are three main components:

- Tag: container that digitizes and stores information. You have a reader that reads that information out of the tag.
  - **Active RFID.** An active RFID tag has its own power source, often a battery. They cover distances of 100 meters or 300 feet.
  - **Passive RFID.** A passive RFID tag receives its power from the reading antenna, whose electromagnetic wave induces a current in the RFID tag's antenna. They cover distances close to near field communication or 10-20 feet max.
- Reader: reads information out of a tag.
- Antenna: associated with the wireless communication.

## Near field communication

[Near field communication (NFC)](https://squareup.com/us/en/the-bottom-line/managing-your-finances/nfc) is a point-to-point contact technology that allows two devices, like a smartphone and a payments terminal, to talk to each other when they’re very close together (0- 2 cm). It runs over 13.56 MHz and can be used to transfer information.

We’ve extended the use of RFID into our mobile phones and our smartwatches through the use of NFC. It’s a way for our mobile devices to be able to have two way conversations with other devices that we might use. For example, we might be checking out at a store and we can use our phone or our smartwatch to pay for those goods because we’ve associated our credit card with the NFC technology that’s in our devices. You might also see NFC used if you need to pair two Bluetooth devices.

## Bluetooth

Bluetooth is a short-range wireless technology standard that is used for exchanging data between fixed and mobile devices over short distances and building personal area networks. In the most widely used mode, transmission power is limited to 2.4 GHz, giving it a very short range of up to 10 meters or 30 feet. We often refer to this as a personal area network (PAN).

In the early days, Bluetooth was really focused on internet of thing devices, and while trying to discover other devices the battery would drain pretty bad. Bluetooth 4.0 introduced [Bluetooth LE (low energy)](https://www.bluetooth.com/learn-about-bluetooth/feature-enhancements/le-audio/), which consumed less power.
