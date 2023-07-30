---
title: CompTIA A+ - Mobile Devices
description:
  Learn about the various accessories, configurations, hardware, and standards that enable us to connect and use mobile
  devices.
pubDatetime: 2023-07-30T07:33:25.533Z
author: Greg Zometa
postSlug: comptia-a-plus-mobile-devices
featured: true
draft: false
tags:
  - comptia
  - a-plus
  - core-1
  - certification
  - studying
---

This post will cover various aspects of the **Mobile Devices** section of the
[CompTIA A+](https://www.comptia.org/certifications/a) Core 1 certification endeavor. This includes laptop hardware,
laptop displays, mobile device configuration, and mobile device connectivity.

## Table of contents

## Laptop Hardware

You will also find that many laptop manufacturers will provide service information to replace a laptop's keyboard,
display, or other components. Depending on the manufacturer, getting into a laptop to troubleshoot, repair, or modify
can be difficult. If you or your company work frequently with a certain manufacturer (Dell, HP, Lenovo, Apple, etc.) you
will find it easier to work with overtime as you gain experience.

### Batteries

**Laptops are mobile devices**. You are able to travel with a laptop and have it operate anywhere without it being
tethered to a power outlet. It is able to do because of the batteries. Depending on the laptop design, batteries can be
_modular_, unplug and reconnect to the laptop, or they can be _embedded_ into the motherboard inside the laptop case.
Modular batteries allow you to easily disconnect a drained battery and replace it with a fresh, new battery.

Two major considerations that should be made when considering a laptop's battery is **heating/cooling and the battery
memory effect**. The [battery memory effect](https://www.techtarget.com/whatis/definition/battery-memory-effect) is a
reduction in the longevity of a
[rechargeable battery's](https://www.techtarget.com/whatis/definition/rechargeable-battery) charge, due to incomplete
discharge in previous uses. Some types of batteries, such as nickel-cadmium and nickel-metal hydride, can develop a
memory effect when only partially discharged before recharging. This “memory” reduces the capacity of subsequent charges
and thus future [battery life](https://www.techtarget.com/whatis/definition/battery-life) in a given device

There are currently three types of batteries commonly used for laptops: Nickel Cadmium, Nickel Metal Hydride, and
Lithium Ion.

#### Nickel Cadmium (Ni-Cd)

Nickel Cadmium (Ni-Cd) batteries were the standard technology for years, but today they are out of date and new laptops
don't use them anymore. They are heavy and very prone to the _memory effect_. When recharging a Ni-Cd battery that has
not been fully discharged, it _remembers_ the old charge and continues there the next time you use it. The memory effect
is caused by crystallization of the battery's substances and can permanently reduce your battery's lifetime, even make
it useless. To avoid it, completely discharge the battery and then fully recharge it again at least once every few
weeks. This battery contains cadmium, a toxic material, and it should always be recycled or disposed of properly.

#### Nickel Metal Hydride (Ni-MH)

Nickel Metal Hydride (Ni-MH) batteries are the cadmium-free replacement for Ni-Cd. They are less affected by the _memory
effect_ than Ni-Cd and thus require less maintenance and conditioning. However, they have problems at very high or low
room temperatures. Even though they use less hazardous materials (they do not contain heavy metals), they cannot be
fully recycled yet. **The capacity of a Ni-MH battery is approximately twice the capacity of a Ni-Cd battery**. This
means increased run-time from the battery with no additional bulk or weight.

#### Lithium Ion (Li-ion)

Lithium Ion (Li-ion) are the new standard for portable power. Li-ion batteries produce the same energy as Ni-MH, but
weighs 20%-35% less. They do not suffer significantly from the _memory effect_ unlike Ni-MH and Ni-Cd batteries. They
are a non-hazardous material, but ignite very easily. Unfortunately, few consumer recycling programs have been
established for Li-ion batteries.

### Keyboards

Keyboards are one of the most used components of a laptop. It is our primary input into the operating system. It’s a
very easy, yet fragile component to replace. The reason for this is because it’s usually connected to the laptop's
motherboard with a single ribbon cable. If you are finding it difficult to troubleshoot a laptop keyboard, you do have
the option to plug an external keyboard to a USB interface.

A keyboard challenge we may encounter is with smaller laptops there’s less space to have a keyboard. This would require
changing around the layout and function of the keyboard just to be able to fit into a small place. Another challenge can
be damages and replacements of keycaps. Keycaps are very fragile, so be cautious when replacing them or the keyboard
itself.

### RAM

**Every execution program in a laptop's operating system requires memory**. If we ever need to increase the amount of
memory in our laptop, then we’ll probably need to exchange the
[dual in-line memory module (DIMM)](https://www.techtarget.com/searchstorage/definition/DIMM). DIMM is a module that
contains one or several random access memory
([RAM](https://www.techtarget.com/searchstorage/definition/RAM-random-access-memory)) chips on a small circuit board
with pins that connect it to the computer motherboard. The DIMM stores each data bit in a separate memory cell. DIMMs
use a 64-bit data path, since processors used in personal computers have a 64-bit data width.

There are a variety of DIMMs, but the most common standard DIMMs, with a typical length of 5.5 inches and height of 1.18
inches, are:

#### Unbuffered DIMMs (UDIMMs)

Used mainly on desktop and laptop computers. Although they run faster and cost less, UDIMMs aren’t as stable as
registered memory. Commands go directly from the memory controller residing in the CPU to the memory module.

#### Fully-buffered DIMMs (FB-DIMMs)

Usually used as main memory in systems that require large capacities, such as servers and workstations. FB-DIMMs use
advanced memory buffer (AMB) chips to boost reliability, maintain signal integrity and improve methods to detect errors
to reduce [soft errors](https://www.techtarget.com/whatis/definition/soft-error). The AMB bus is split into a 14-bit
read bus and a 10-bit write bus. Having a dedicated read/write bus means reads and writes can happen at the same, which
results in increased performance.

#### Registered DIMMs (RDIMMs)

Also known as buffered memory, RDIMMs are often used in servers and other applications that require robustness and
stability. RDIMMs feature onboard memory registers that are placed between the memory and the memory controller. The
memory controller buffers command, addressing and clock cycling, and directs instructions to the dedicated memory
registers rather than directly accessing the DRAM. Consequently, the instructions could take about one CPU cycle longer.
However, the buffering reduces the strain on the CPU's memory controller.

#### Load-reduced DIMMs (LR-DIMMs)

Use isolation memory buffer (iMB) technology that buffers the data and address lanes, reducing the load on the memory
controller. The iMB chip also buffers data signals, unlike the register on RDIMMs, which only buffers command,
addressing and clock cycling. The iMB chip isolates all electrical loading, including data signals of the DRAM chips on
the DIMM from the memory controller. As a result, the memory controller only sees the iMB and not the DRAM chips. The
memory buffer then handles all the reads and writes to the DRAM chips, enhancing capacity and speed.

#### SO-DIMM

While the standard DIMM is in the form of a rectangular stick approximately 5.5 inches in length, the small outline dual
in-line memory module (SO-DIMM) is about half that size at 2.74 inches long. Both types of DIMMs are most commonly 1.2
inches tall, but both are made in a very low profile (VLP) format that is only 0.8 inches tall. SO-DIMM is mainly used
for portable computing devices such as laptops and tablets. It differs from standard DIMM in that the DDR4 SO-DIMM has
260 pins versus 288 pins for the DRR4 DIMM. Standard DIMMs are used in PCs and servers. The VLP DIMM was developed to
meet the space requirements of [blade servers](https://www.techtarget.com/searchdatacenter/definition/blade-server).

For each of these DIMMs, there are two standards: **DDR (Double Data Rate) and DDR2 (Double Data Rate2)**. The DDR2 is
essentially an upgraded version of the DDR standard that allows for memory modules with lower power consumption, greater
heat dissipation, increased speed capabilities, larger memory capacities, and increased performance.

**This table illustrates the difference in the properties of the DDR and DDR2 memory modules**:

| Property  | DDR                        | DDR2                                  | Difference between DDR & DDR2                        |
| --------- | -------------------------- | ------------------------------------- | ---------------------------------------------------- |
| Voltage   | 2.5 volts                  | 1.8 Volts                             | Lower power consumption and greater heat dissipation |
| Size      | 128MB to 1GB               | 256Mb to 4GB                          | Larger memory capacities                             |
| Speed     | 200, 266, 333, and 400 Mhz | 400, 533, and 667 Mhz                 | Speed capabilities above 400MHz                      |
| Bandwidth | Up to 6.4GB per second     | Dual Channel, up to 10.6GB per second | Higher memory performance                            |

**This table illustrates the different types of memory modules and the associated pin configurations for the DDR and
DDR2 versions of those modules**:

| Memory Type          | DDR2        | DDR         |
| -------------------- | ----------- | ----------- |
| Unbuffered DIMM      | 240pin 1.8V | 184pin 2.5V |
| Registered DIMM      | 240pin 1.8V | 184pin 2.5V |
| SODIMM               | 200pin 1.8V | 200pin 2.5V |
| Mini Registered DIMM | 244pin 1.8V | N/A         |
| MicroDIMM            | 214pin 1.8V | 172pin 2.5V |

### Disk Drives

Our laptops also need some type of storage space to retrieve and save files to the system. Older laptops might have
storage in the form of a magnetic disk called
[hard disk drives (HDD)](https://www.techtarget.com/searchstorage/definition/hard-disk-drive). These are spinning,
physical drives in a form factor that’s around 2 and 1/2 inches. This 2 and 1/2 inch form factor works well for these
portable platforms, especially when you consider that desktop platforms have the larger 3 and 1/2 inch size hard drives.
This makes it very easy to perform an upgrade because you can unplug a HDD and connect an SSD to the same interface
using exactly the same form factor.

Many newer laptops will instead have
[solid state drives (SSD)](https://www.techtarget.com/searchstorage/definition/SSD-solid-state-drive), instead of
spinning hard drives. There are no moving parts inside of an SSD. The two key components in an SSD are the flash
controller and [NAND flash memory](https://www.techtarget.com/searchstorage/definition/NAND-flash-memory) chips. This
configuration is optimized to deliver high read/write performance for sequential and random data requests. One
significant advantage of the SSD is the greatly increased speed for reading and writing data to this device.

**This table compares the difference between HDD and SSD**:

| Hard Disk Drive                                                                                      | Solid State Drive                                                                                                        |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| HDD has longer Read and Write time.                                                                  | SSD has a shorter Read and Write time.                                                                                   |
| HDD has higher latency.                                                                              | SSD has a lower latency.                                                                                                 |
| HDD supports fewer I/O operations per second (IOPS).                                                 | SSD supports more I/O operations per second(IOPS).                                                                       |
| Over a longer time, and with larger files stored on an HDD, there is a high chance of fragmentation. | Fragmentation doesn’t occur on an SSD drive.                                                                             |
| HDD is available in various different capacities.                                                    | An SSD drive offers limited storage capacities.                                                                          |
| HDD stands for Hard Disk Drive.                                                                      | SSD stands for Solid State Drive.                                                                                        |
| HDD offers a slower speed for reading and writing data.                                              | SSD is faster at reading and writing data.                                                                               |
| An HDD weighs more.                                                                                  | SDD drives are lighter than HDD drives as they don’t have the rotating disks spindle, and mirror.                        |
| The performance of HDD drives worsens because of the fragmentation.                                  | SSD drive performance is never impacted by fragmentation.                                                                |
| The moving parts of HDDs make them vulnerable to crashes and damage because of vibration.            | SSD drives can tolerate vibration up to 2000Hz, that is more than HDD.                                                   |
| HDD contains moving mechanical parts, like the arm.                                                  | SSD does not contain mechanical parts, only electronic parts like ICs.                                                   |
| HDD drive is older and more traditional.                                                             | SSD is a newer type of storage drive.                                                                                    |
| HDD can produce noise due to mechanical movements.                                                   | SSD does not produce noise.                                                                                              |
| HDD are usually 3.5″ and 2.5″ size for desktop and laptops.                                          | SDD is available in 2.5 inch, 1.8″ and 1.0″, increasing the available space in a computer, especially desktop or server. |
| The HDD has moving part and magnetic platters. With more uses they are prone to fail.                | The SDD drive has no moving parts. With more uses they are less likely to fail.                                          |

Two newer form factors worth noting are M.2 and U.2 SSDs. An M.2 SSD varies in length -- typically from 42 millimeters
(mm) to 110 mm -- and attaches directly to a motherboard. It communicates via NVMe or SATA. The small size of an M.2
limits the surface area for heat dissipation which, over time, will reduce its performance and stability.

### Laptop Displays

A majority of laptops use a
[liquid crystal display (LCD)](https://www.techtarget.com/whatis/definition/LCD-liquid-crystal-display). From a laptop
perspective, the advantages of an LCD display is that they are lightweight and use very little power, and they’re
relatively inexpensive to make, keeping the cost of the laptop down.

However, a major disadvantage to an LCD is the backlight or light source behind all of that shines through to give us
the image that’s on our screen. If this backlight was to fail, you could see that it’s part of the display itself,
making it relatively difficult to be able to repair or replace. One way to tell if your backlight has failed is to shine
a flashlight directly at the screen. If you’re able to make out some of the information on the screen, then it’s very
possible that the problem is not with the display, but with the backlight behind the display.

**Types of LCDs include**:

- **Twisted Nematic (TN)** - which are inexpensive while having high response times. However, TN displays have low
  contrast ratios, viewing angles and color contrasts.
- **In Panel Switching displays (IPS Panels)** - which boast much better contrast ratios, viewing angles and color
  contrast when compared to TN LCDs.
- **Vertical Alignment Panels (VA Panels)** - which are seen as a medium quality between TN and IPS displays.
- **Advanced Fringe Field Switching (AFFS)** - which is a top performer compared IPS displays in color reproduction
  range.

If you have a newer device, you may be using an
[Organic Light Emitting Diode (OLED)](https://www.techtarget.com/whatis/definition/OLED-TV) display. This organic
material emits light when you provide it with a current which requires no backlight, and because there’s no backlight
and no liquid crystals, these are very thin displays.

## USB

For the majority of our phones and our tablets, we use
[USB or Universal Serial Bus](https://www.techtarget.com/searchstorage/definition/USB-drive) as the primary wired
connection type. USB is designed for high speed communication and it’s often used to connect our mobile device with our
computer or with a power source. There are three main USB specifications that USB flash drives can connect through: 1.0,
2.0 and 3.0. Each specification publication allows for faster
[data transfer rates](https://www.techtarget.com/searchunifiedcommunications/definition/data-transfer-rate) than the
previous version.

### USB Connectors

#### USB Type C

Often referred to simply as [USB-C](https://www.lifewire.com/usb-c-4149490), these plugs and receptacles are rectangular
with four rounded corners. Only USB 3.1 Type C plugs and receptacles (and thus cables) exist, but adapters for backward
compatibility with USB 3.0 and 2.0 connectors are available. This latest USB connector has finally solved the problem of
which side goes up. Its symmetrical design allows it to be inserted in the receptacle in either fashion, so you never
have to try again (one of the biggest peeves about earlier USB plugs). These are being widely adopted on smartphones and
other devices.

#### USB Type A

Officially called _[USB Standard-A](https://www.lifewire.com/usb-type-a-connector-2626032)_, these plugs and receptacles
are rectangular and are the most commonly seen USB connectors. USB 1.1 Type A, USB 2.0 Type A and USB 3.0 Type A plugs
and receptacles are physically compatible.

#### USB Type B

Officially called _[USB Standard-B](https://www.lifewire.com/usb-type-b-connector-2626033)_, these plugs and receptacles
are square shaped with an extra notch on top, most noticeable on USB 3.0 Type B connectors. USB 1.1 Type B and USB 2.0
Type B plugs are physically compatible with USB 3.0 Type B receptacles but USB 3.0 Type B plugs are not compatible with
USB 2.0 Type B or USB 1.1 Type B receptacles.

#### USB Powered-B

The USB Powered-B connector is also specified in the USB 3.0 standard. This receptacle is physically compatible with USB
1.1 and USB 2.0 Standard-B plugs, and of course, USB 3.0 Standard-B and Powered-B plugs as well.

#### USB Micro-A

USB 3.0 Micro-A plugs look like two different rectangular plugs fused together, one slightly longer than the other. USB
3.0 Micro-A plugs are only compatible with USB 3.0 Micro-AB receptacles.

#### USB 2.0 Micro-A

USB 2.0 Micro-A plugs are very small and rectangular, resembling in many ways a shrunken USB Type A plug. USB Micro-A
plugs are physically compatible with both USB 2.0 and USB 3.0 Micro-AB receptacles.

#### USB Micro-B

USB 3.0 Micro-B plugs look almost identical to USB 3.0 Micro-A plugs in that they appear as two individual, but
connected, plugs. USB 3.0 Micro-B plugs are compatible with both USB 3.0 Micro-B receptacles and USB 3.0 Micro-AB
receptacles.

#### USB 2.0 Micro-B

USB 2.0 Micro-B plugs are very small and rectangular, but the two corners on one of the long sides are beveled. USB
Micro-B plugs are physically compatible with both USB 2.0 Micro-B and Micro-AB receptacles, as well as USB 3.0 Micro-B
and Micro-AB receptacles.

#### USB Mini-A

The USB 2.0 Mini-A plug is rectangular, but one side is more rounded. USB Mini-A plugs are only compatible with USB
Mini-AB receptacles. There is no USB 3.0 Mini-A connector.

#### USB Mini-B

The USB 2.0 Mini-B plug is rectangular with a small indention on either side, almost looking like a stretched out piece
of bread when looking at it head-on. USB Mini-B plugs are physically compatible with both USB 2.0 Mini-B and Mini-AB
receptacles. There is no USB 3.0 Mini-B connector.

### USB Standards

### USB1.1

This was the original version of the USB, Universal Serial Bus and was released in September 1998 after a few problems
with the USB 1.0 specification released in January 1996 were resolved.. It provided a Master / Slave interface and a
tiered star topology which was capable of supporting up to 127 devices and a maximum of six tiers or hubs. The master or
"Host" device was normally a PC with the slaves or "Devices" linked via the cable.

One of the aims of the USB standard was to minimize the complexity within the device by enabling the Host to perform the
processing. This meant that devices would be cheap and readily accessible.

**The data transfer rates of USB 1.1 are defined as**:

- _Low speed:_   1.5 Mbps
- _Full speed:_   12 Mbps

The cable length for USB 1.1 is limited to 5 metres, and the power consumption specification allows each device to take
up to 500mA, although this is limited to 100mA during start-up.

USB 1.1 does not allow extension cables or the inclusion of pass-through monitors (due to timing and power limitations).

#### USB 2.0

The USB 2.0 standard is a development of USB 1.1 which was released in April 2000. The main difference when compared to
USB 1.1 was the data transfer speed increase up to a "High Speed" rate of 480 Mbps. However it should be noted that even
though devices are labelled USB 2.0, they may not be able to meet the full transfer speed.

The data encoding method for this version of USB is Unicode. In addition to the improvements in data capability USB 2
also saw an increase in the power provision to 1.8A. This enabled USB to provide charge for smartphones that were
increasingly charging faster and also for more power hungry peripherals such as external drives, etc. When compared to
USB 1, this provided a much needed improvement in current capability.

#### USB 3.0

The USB3 standard was first demonstrated at the Intel Developer Forum in September 2007. The major feature is what is
termed the SuperSpeed bus, which provides a fourth transfer mode which gives data transfer rates of 4.8 Gbit/s. Although
the USB3 raw throughput is 4 Gbit/s, data transfer rates of 3.2 Gbit/s, i.e.0.4 GByte/s more after protocol overhead are
deemed acceptable within the standard. The standard is also backwards compatible with USB 2.0.

The move to USB 3 saw a change in the data encoding from Unicode to 8b/10b encoding.

Often USB ports on computers, etc. may have the USB symbol with 'SS' added, i.e. SS USB. SS USB denotes USB 3, i.e.
Super Speed USB.

#### USB 3.1

USB 3.1 is also known as SuperSpeed+. The use of USB 3.1 doubles the speed of data transfer when compared to USB 3.0. It
provides raw data transfer of 10 Gbit/s, and it also reducing line encoding overhead to just 3%. It does this by
changing the encoding scheme to 128b/132b.

USB 3.1 also increases the charging capability to 20V, 5A, with the capability to reduce it to 5V as appropriate. This
enables users to charge much larger devices including laptop computers, etc. All these advances mean that when compared
to previous releases, USB 3.1 provides a significant increase in speed and functionality.

#### USB 3.2

The next USB iteration is USB 3.2. This was released in September 2017. It retains the existing USB 3.1 SuperSpeed and
SuperSpeed+ data modes but introduces two new SuperSpeed+ transfer modes over the USB-C connector with data rates of 10
and 20 Gbit/s (1.25 and 2.5 GB/s). The increase in bandwidth is a result of multi-lane operation over existing wires
that were intended for flip-flop capabilities of the USB-C connector.

Another key aspect of USB 3.2 was that the USB-IF introduced a new naming scheme for the different variants with the aim
of simplifying the marketing, although whether this has brought ore confusion is a matter of debate. The USB-IF
recommended branding the three variants as 5, 10, and 20 Gbit/s transfer modes as SuperSpeed USB 5Gbps (often called USB
3.2 Gen 1), SuperSpeed USB 10Gbps (USB 3.2 Gen 2), and SuperSpeed USB 20Gbps (USB 3.2 Gen 2x2), respectively. The USB-IF
decided on "2x2" notation for the highest speed version because the new standard doubles the number of data lanes within
a USB-C cable to achieve the 20Gbps transfer speed.

## Mobile Connectivity

### Bluetooth

[Bluetooth](https://www.techtarget.com/searchmobilecomputing/definition/Bluetooth) is a telecommunications industry
specification that describes how mobile devices, computers and other devices can easily communicate with each other
using a short-range wireless connection. It commonly requires you to view or verify a particular phrase or personal
identification number to be assured that you’re really connecting the device you have in front of you. This is a
security function that allows you to control exactly what devices are able to communicate to your mobile phone or your
tablet.

Bluetooth technology requires that a low-cost
[transceiver](https://www.techtarget.com/searchnetworking/definition/transceiver) chip be included in each device. The
transceiver transmits and receives in a previously unused frequency band of 2.45 Ghz that is available globally with
some variation of bandwidth in different countries. In addition to data, up to three voice channels are available. Each
device has a unique 48-bit address from the
[IEEE](https://www.techtarget.com/whatis/definition/IEEE-Institute-of-Electrical-and-Electronics-Engineers) 802
standard. Bluetooth connections can be point to point or multipoint.

The maximum Bluetooth range is 10 meters. Data can be exchanged at a rate of 1 megabit per second -- up to 2
[Mbps](https://www.techtarget.com/searchnetworking/definition/Mbps) in the second generation of the technology. A
[frequency hop scheme](https://www.techtarget.com/searchnetworking/definition/frequency-hopping-spread-spectrum) allows
devices to communicate even in areas with a great deal of electromagnetic interference. Built-in encryption and
verification is provided.

#### Bluetooth Low Energy (LE)

[Bluetooth Low Energy](https://www.techtarget.com/iotagenda/definition/Bluetooth-Low-Energy-Bluetooth-LE) is a
power-conserving variant of [Bluetooth](https://www.techtarget.com/searchmobilecomputing/definition/Bluetooth) personal
area network ([PAN](https://www.techtarget.com/searchmobilecomputing/definition/personal-area-network)) technology,
designed for use by Internet-connected machines and appliances.

Like its predecessor, Bluetooth LE uses
[frequency hopping](https://www.techtarget.com/searchnetworking/definition/frequency-hopping-spread-spectrum) wireless
technology in the 2.4 GHz unlicensed radio band to interconnect nearby devices. Unlike its predecessor, Bluetooth LE
maxes out at just 1 Mbps while consuming just 0.01 to 0.5 watts. That’s up to one third of the speed of Bluetooth
Classic, at no more than half the power.

Bluetooth LE is attractive to consumer electronics and Internet-connected machine manufacturers because of its low cost,
long battery life, and ease of deployment. From thermometers and heart rate monitors to smart watches and proximity
sensors, Bluetooth LE facilitates infrequent short-range wireless data communication between devices, powered by nothing
more than a dime-sized battery.

### GPS

The
[GPS (Global Positioning System)](https://www.techtarget.com/searchmobilecomputing/definition/Global-Positioning-System)
is a "constellation" of 31 well-spaced
[satellites](https://www.techtarget.com/searchmobilecomputing/definition/satellite) that orbit the Earth and make it
possible for people with ground receivers to pinpoint their geographic location. The location accuracy is anywhere from
100 to 10 meters for most equipment and within one meter with special military-approved equipment. GPS equipment is
widely used in science and has now become sufficiently low-cost so that almost anyone can own a GPS receiver.

### MDM

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

### GSM vs CDMA

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

### 1G, 2G, 3G, 4G, & 5G

Identifying the strengths of the underlying technology of a cell phone is simple as long as you understand the meaning
of [1G, 2G, 3G, 4G, and 5G](https://www.lifewire.com/1g-vs-2g-vs-2-5g-vs-3g-vs-4g-578681). Most
[wireless carriers](https://www.lifewire.com/what-is-a-mobile-carrier-2373339) currently support both 4G and 3G
technology, which is handy when your location allows your phone to operate only at 3G speeds. The next generation is 5G,
which launched in 2020.

#### 1G: Voice Only

1G is the first generation of wireless cellular technology. 1G supports voice only calls. 1G is analog technology, and
the phones using it had poor battery life and voice quality, little security, and were prone to dropped calls. The
maximum speed of 1G technology is 2.4 [Kbps](https://www.lifewire.com/bits-per-second-kbps-mbps-gbps-818122).

#### 2G: SMS and MMS

The 2G telephone technology introduced call and text encryption, along with data services such
as [SMS, picture messages, and MMS](https://www.lifewire.com/what-is-sms-mms-iphone-2000247). Although 2G replaced 1G
and is superseded by later technology versions, it's still used around the world. The maximum speed of 2G with General
Packet Radio Service (GPRS) is 50 Kbps. The max theoretical speed is 384 Kbps with Enhanced Data Rates for
[GSM Evolution (EDGE)](https://www.lifewire.com/definition-of-edge-578669). EDGE+ can get up to 1.3 Mbps.

#### 2.5G and 2.75G: Data

Before making the major leap from 2G to 3G wireless networks, the lesser-known 2.5G and 2.75G were interim standards
that bridged the gap to make data transmission possible. 2.5G introduced a new packet-switching technique that was more
efficient than 2G technology. This led to 2.75G, which provided a theoretical threefold speed increase. AT&T was the
first GSM network to support 2.75G with EDGE in the U.S. 2.5G and 2.75G were not defined formally as wireless standards.
They served mostly as marketing tools to promote new cell phone features to the public.

#### 3G: More Data, Video Calling, and Mobile Internet

The introduction of [3G networks](https://www.lifewire.com/what-is-3g-3426465) in 1998 ushered in faster
data-transmission speeds, so you could use your cell phone in more data-demanding ways such as for video calling and
mobile internet access. The term "mobile broadband" was first applied to 3G cellular technology. Like 2G, 3G evolved
into the much faster 3.5G and 3.75G as more features were introduced to bring about 4G. The maximum speed of 3G was
around 2 Mbps for non-moving devices and 384 Kbps in moving vehicles.

#### 4G: The Current Standard

The fourth generation of networking, which was released in 2008, is
[4G](https://www.lifewire.com/what-is-4g-wireless-577577). It supports mobile web access like 3G does and also gaming
services, HD mobile TV, video conferencing, 3D TV, and other features that demand high speeds. The max speed of a 4G
network when the device is moving is 100 Mbps. The speed is 1 Gbps for low-mobility communication such as when the
caller is stationary or walking. Most current cell phone models support both 4G and 3G technologies.

## 5G: The Next Standard

[5G](https://www.lifewire.com/5g-wireless-4155905) is a wireless technology with a limited rollout that's intended to
improve on 4G. 5G promises significantly faster data rates, higher connection density, much lower latency, and energy
savings, among other improvements. The anticipated theoretical [speed](https://www.lifewire.com/5g-speed-4180992) of 5G
connections is up to 20 Gbps per second.
