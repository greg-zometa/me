---
title: Device Connectivity
description: Learn about cellular standards, mobile device connectivity, and mobile device configurations.
pubDatetime: 2023-08-02T06:36:17.783Z
postSlug: mobile-devices-device-connectivity
tags:
  - comptia
  - a-plus
  - core-1
  - mobile-devices
  - certification
  - studying
---

This post will cover various aspects of the **Mobile Devices** section of the
[CompTIA A+](https://www.comptia.org/certifications/a) Core 1 certification endeavor.

## Table of contents

## GPS

The
[GPS (Global Positioning System)](https://www.techtarget.com/searchmobilecomputing/definition/Global-Positioning-System)
is a "constellation" of 31 well-spaced
[satellites](https://www.techtarget.com/searchmobilecomputing/definition/satellite) that orbit the Earth and make it
possible for people with ground receivers to pinpoint their geographic location. The location accuracy is anywhere from
100 to 10 meters for most equipment and within one meter with special military-approved equipment. GPS equipment is
widely used in science and has now become sufficiently low-cost so that almost anyone can own a GPS receiver.

## MDM

[Mobile device management (MDM)](https://www.techtarget.com/searchmobilecomputing/definition/mobile-device-management)
software allows IT administrators to control, secure and enforce policies on smartphones, tablets and other endpoints.
MDM is a core component of enterprise mobility management
([EMM](https://www.techtarget.com/searchmobilecomputing/definition/enterprise-mobility-management-EMM)) and unified
endpoint management
([UEM](https://www.techtarget.com/searchenterprisedesktop/definition/unified-endpoint-management-UEM)), which aims to
manage all endpoint devices with a single console.

Mobile device management relies on endpoint software called an MDM
[agent](https://www.techtarget.com/whatis/definition/software-agent) and an MDM server that lives in the cloud. IT
administrators configure policies through the MDM server's management console, and the server then pushes those policies
over the air to the MDM agent on the device. The agent applies the policies to the device by communicating with
application programming interfaces
([APIs](https://www.techtarget.com/searchapparchitecture/definition/application-program-interface-API)) built directly
into the device operating system.

The consumer smartphone boom that started with the launch of the Apple iPhone in 2007 led to the bring your own device
([BYOD](https://www.techtarget.com/whatis/definition/BYOD-bring-your-own-device)) trend, which fueled further interest
in MDM.
[Deploying MDM in a BYOD environment](https://www.techtarget.com/searchenterprisedesktop/tip/How-to-successfully-implement-MDM-for-BYOD)
introduces some challenges. Organizations must balance IT's need to secure corporate apps and data with the end user's
need to maintain privacy. Users are often concerned with IT's ability to monitor their actions on a mobile device, but
privacy settings can help alleviate those concerns.

## GSM vs CDMA

[GSM stands for Global System for Mobile communication, while CDMA stands for Code Division Multiple Access](https://www.verizon.com/articles/Smartphones/what-are-phone-bands-and-why-do-they-matter/).
GSM uses FDMA (Frequency division multiple access) and TDMA (Time division multiple access). GSM supports transmitting
data and voice both at once, but CDMA does have not this feature. The main distinction between GSM and CDMA is that in
GSM, the customer information is put on a SIM card which can be moved to a new mobile phone. Whereas only mobile phones
from a set of whitelisted companies can be used with a CDMA network.

**This table compares the difference between GSM and CDMA:**

| Serial No.                                       | GSM                                                                                             | CDMA                                                                                 |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 1. Full form global                              | Global System for Mobile communication.                                                         | Code Division Multiple Access.                                                       |
| 2. Technology used                               | FDMA(Frequency Division Multiple Access) and TDMA (Time Division Multiple Access).              | CDMA(Code Division Multiple Access).                                                 |
| 3. Availability                                  | GSM is globally widely used and available.                                                      | CDMA is available in fewer countries and carriers.                                   |
| 4. Data speed rate                               | 42Mbps in HSPA (3G).                                                                            | 3.6Mbps in CDMA.                                                                     |
| 5.Features                                       | GSM supports transmitting data and voice both at once.                                          | CDMA does not support this feature.                                                  |
| 6. Customer Information                          | Stored in a SIM card.                                                                           | Stored in a headset or phone.                                                        |
| 7. Encryption                                    | GSM does not provide built-in encryption is available.                                          | CDMA provides built-in encryption.                                                   |
| 8. Secure                                        | GSM offers less secure communication.                                                           | CDMS offers secure communication.                                                    |
| 9. Roaming                                       | GSM enables worldwide roaming.                                                                  | CDMA enables limited roaming.                                                        |
| 10. Signal Detection                             | GSM signals can be detected since they are focused in a narrow bandwidth.                       | CDMA transmissions are difficult to detect.                                          |
| 11. SIM Card                                     | There is always a requirement of SIM card for a GSM device to function.                         | There are no such requirements for CDMA phones.                                      |
| 12. Flexibility                                  | When a SIM on a phone stops working, we can use another SIM rather than purchasing a new phone. | When a CDMA on a phone ceases operating, we must purchase a new phone.               |
| 13. Type of Spectrum                             | GSM technology operates on a wedge spectrum known as carrier.                                   | CDMA technology is based on spread spectrum technology.                              |
| 14. MIMO (Multiple Input Multiple Output) method | GSM follows 2\*2 MIMO.                                                                          | LTE adheres to 8*8, 4*4 MIMO and also supports cooperative MIMO and multi-user MIMO. |

## 1G, 2G, 3G, 4G, & 5G

Identifying the strengths of the underlying technology of a cell phone is simple as long as you understand the meaning
of [1G, 2G, 3G, 4G, and 5G](https://www.lifewire.com/1g-vs-2g-vs-2-5g-vs-3g-vs-4g-578681). Most
[wireless carriers](https://www.lifewire.com/what-is-a-mobile-carrier-2373339) currently support both 4G and 3G
technology, which is handy when your location allows your phone to operate only at 3G speeds. The next generation is 5G,
which launched in 2020.

### 1G: Voice Only

1G is the first generation of wireless cellular technology. 1G supports voice only calls. 1G is analog technology, and
the phones using it had poor battery life and voice quality, little security, and were prone to dropped calls. The
maximum speed of 1G technology is 2.4 [Kbps](https://www.lifewire.com/bits-per-second-kbps-mbps-gbps-818122).

### 2G: SMS and MMS

The 2G telephone technology introduced call and text encryption, along with data services such
as [SMS, picture messages, and MMS](https://www.lifewire.com/what-is-sms-mms-iphone-2000247). Although 2G replaced 1G
and is superseded by later technology versions, it's still used around the world. The maximum speed of 2G with General
Packet Radio Service (GPRS) is 50 Kbps. The max theoretical speed is 384 Kbps with Enhanced Data Rates for
[GSM Evolution (EDGE)](https://www.lifewire.com/definition-of-edge-578669). EDGE+ can get up to 1.3 Mbps.

### 2.5G and 2.75G: Data

Before making the major leap from 2G to 3G wireless networks, the lesser-known 2.5G and 2.75G were interim standards
that bridged the gap to make data transmission possible. 2.5G introduced a new packet-switching technique that was more
efficient than 2G technology. This led to 2.75G, which provided a theoretical threefold speed increase. AT&T was the
first GSM network to support 2.75G with EDGE in the U.S. 2.5G and 2.75G were not defined formally as wireless standards.
They served mostly as marketing tools to promote new cell phone features to the public.

### 3G: More Data, Video Calling, and Mobile Internet

The introduction of [3G networks](https://www.lifewire.com/what-is-3g-3426465) in 1998 ushered in faster
data-transmission speeds, so you could use your cell phone in more data-demanding ways such as for video calling and
mobile internet access. The term "mobile broadband" was first applied to 3G cellular technology. Like 2G, 3G evolved
into the much faster 3.5G and 3.75G as more features were introduced to bring about 4G. The maximum speed of 3G was
around 2 Mbps for non-moving devices and 384 Kbps in moving vehicles.

### 4G: The Current Standard

The fourth generation of networking, which was released in 2008, is
[4G](https://www.lifewire.com/what-is-4g-wireless-577577). It supports mobile web access like 3G does and also gaming
services, HD mobile TV, video conferencing, 3D TV, and other features that demand high speeds. The max speed of a 4G
network when the device is moving is 100 Mbps. The speed is 1 Gbps for low-mobility communication such as when the
caller is stationary or walking. Most current cell phone models support both 4G and 3G technologies.

### 5G: The Next Standard

[5G](https://www.lifewire.com/5g-wireless-4155905) is a wireless technology with a limited rollout that's intended to
improve on 4G. 5G promises significantly faster data rates, higher connection density, much lower latency, and energy
savings, among other improvements. The anticipated theoretical [speed](https://www.lifewire.com/5g-speed-4180992) of 5G
connections is up to 20 Gbps per second.
