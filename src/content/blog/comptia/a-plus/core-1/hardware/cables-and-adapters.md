---
title: Cables and Adapters
description:
  There's a lot to know about cables. Take my hand and let me walk you through the overwhelming amount of cables used in
  hardware.
pubDatetime: 2023-08-21T14:36:24.679Z
postSlug: hardware-cables-and-adapters
featured: true
draft: true
tags:
  - comptia
  - a-plus
  - core-1
  - hardware
  - certification
  - studying
---

This post will cover various aspects of the **Hardware** section of the
[CompTIA A+](https://www.comptia.org/certifications/a) Core 1 certification endeavor.

## Table of contents

## Network cables

The main types of network cables are coax, fiber optics, and shielded and unshielded twisted pair. As enterprises deploy
new technologies, it's critical to select the right cables.

### Twisted pair

A [twisted pair](https://www.techtarget.com/searchdatacenter/definition/Categories-of-twisted-pair-cabling-systems)
cabling system is a cable consisting of one or several pairs of copper wires. In the pair, one wire is used to transmit
data, and the other is the [ground](https://www.techtarget.com/whatis/definition/ground) reference. These wires are
twisted together and around each other and are insulated with a dielectric polymeric compound. Twisting helps minimize
[electromagnetic radiation](https://www.techtarget.com/whatis/definition/radiant-energy) and resists external
interference. It also helps limit interference with adjacent twisted pair cables.

Twisted pair cables were among the earliest guided transmission media, along with [coaxial cables](#coaxial-cable).
Today, twisted-pair cables are used in many applications in networking and communication, for example, in telephone
lines, [Digital Subscriber Line](https://www.techtarget.com/whatis/reference/Fast-Guide-to-DSL-Digital-Subscriber-Line)
and [local area networks](/posts/networking-internet-connections#local-area-network).

To prevent noise, signal interference and [crosstalk](https://www.techtarget.com/searchnetworking/definition/crosstalk)
during transmissions, twisting is introduced into conducting cables. Twisting reduces the strength of noise signals and
cancels out external waves by moving a part of the noise in the direction of the signal and another part in the opposite
direction. Since the receiver can calculate the [voltage](https://www.techtarget.com/whatis/definition/voltage)
difference of two wires to retrieve data more efficiently, twisting provides better noise immunity and lower signal
attenuation.

Two types of copper [conductors](https://www.techtarget.com/whatis/definition/conductor) may be used in twisted-pair
cable:

1. **Solid** — A solid conductor twisted-pair cable, with a single strand of copper, offers better transmission
   performance over long distances, making it suitable for use in permanent lines and
   [backbone](https://www.techtarget.com/searchnetworking/definition/backbone) cabling with the use of an insulation
   displacement connector, or IDC.
2. **Stranded** — A twisted-pair cable with stranded wiring consists of multiple smaller wires woven together. It has
   high signal [attenuation](https://www.techtarget.com/searchnetworking/definition/attenuation), which limits its
   performance distance. That is why it is usually used only in patch cord production for local connections.

**This table illustrates the standard types of twisted pair cabling**:

| Name    | Typical construction      | Bandwidth   | Applications                          | Notes                                                                                                                                          |
| ------- | ------------------------- | ----------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Level 1 |                           | 400 kHz     | Telephone and modem lines             | Not described in EIA/TIA recommendations. Unsuitable for modern systems.[15]                                                                   |
| Level 2 |                           | 4 MHz       | Older terminal systems, e.g. IBM 3270 | Not described in EIA/TIA recommendations. Unsuitable for modern systems.[15]                                                                   |
| Cat 3   | UTP[16]                   | 16 MHz[16]  | 10BASE-T, 100BASE-T4[16]              | Described in EIA/TIA-568. Unsuitable for speeds above 16 Mbit/s. Now mainly for telephone cables.[16]                                          |
| Cat 4   | UTP[16]                   | 20 MHz[16]  | 16 Mbit/s Token Ring[16]              | Not commonly used[16]                                                                                                                          |
| Cat 5   | UTP[16]                   | 100 MHz[16] | 100BASE-TX, 1000BASE-T[16]            | Common for current LANs. Superseded by Cat 5e, but most Cat 5 cables meet Cat 5e standards.[16] Limited to 100 m between equipment.            |
| Cat 5e  | UTP,[16] F/UTP, U/FTP[17] | 100 MHz[16] | 1000BASE-T, 2.5GBASE-T[16]            | Enhanced Cat 5. Common for current LANs. Same construction as Cat 5, but with better testing standards.[16] Limited to 100m between equipment. |
| Cat 6   | UTP,[16] F/UTP, U/FTP[18] | 250 MHz[16] | 5GBASE-T, 10GBASE-T                   | ISO/IEC 11801 2nd Ed. (2002), ANSI/TIA 568-B.2-1. Limited to 55 m distance at 10GBASE-T                                                        |
| Cat 6A  | UTP, F/UTP, U/FTP, S/FTP  | 500 MHz     | 5GBASE-T, 10GBASE-T                   | Improved standards, tested to 500 MHz. Full 100 m distance at 10GBASE-T ISO/IEC 11801 2nd Ed. Am. 2. (2008), ANSI/TIA-568-C.1 (2009)           |
| Cat 7   | S/FTP, F/FTP              | 600 MHz     | ?                                     | ISO/IEC 11801 2nd Ed. (2002). Only with GG45 or TERA connectors. It is not recognized by the EIA/TIA.                                          |
| Cat 7A  | S/FTP, F/FTP              | 1 GHz       | ?                                     | ISO/IEC 11801 2nd Ed. Am. 2. (2008). Only with GG45 or TERA connectors. It is not recognized by the EIA/TIA.                                   |
| Cat 8.1 | F/UTP, U/FTP              | 2 GHz       | 25GBASE-T, 40GBASE-T                  | ANSI/TIA-568-C.2-1, ISO/IEC 11801-1:2017                                                                                                       |
| Cat 8.2 | S/FTP, F/FTP              | 2 GHz       | 25GBASE-T, 40GBASE-T                  | ISO/IEC 11801-1:2017                                                                                                                           |

#### UTP

Unshielded twisted pair ([UTP](https://www.techtarget.com/searchnetworking/definition/Unshielded-Twisted-Pair)) cables
generally comprise wires and insulators. As the name suggests, a UTP cable has no internal shielding. The UTP cable is
the most common twisted-pair cable used in Ethernet networks. It also is used for traditional telephone (UTP-Cat1)
systems.

UTP cables are popular all over the world due to their low cost, ease of installation and flexibility. They also support
high data transfer speeds of up to 1 gigabit per second (Gbps) for transmission distances of up to 100 meters (m). These
cables are also easy to expand and troubleshoot.

One crucial drawback of UTP is that it is vulnerable to signal interference, which can affect output quality. Moreover,
it is not suitable for long-distance transmissions. To support distances longer than 100 m, repeaters are required.

#### STP

Shielded twisted pair ([STP](https://www.techtarget.com/searchnetworking/definition/shielded-twisted-pair)) cables come
with a braided, wired mesh that encases each pair of insulated copper wires. STP cables include a shielding, usually
made of aluminum foil, around the conductors to isolate the conductors and improve the cables' resistance to
[noise](https://www.techtarget.com/whatis/definition/noise) and signal interference. One drawback is that STP cables are
more difficult to connect at termination points. Also, STP cables are more expensive than UTP cables. Nonetheless, they
prevent signal interference better than UTP cables, so their additional cost can be worth it, depending on the
application.

Shielded cables support
[data transfer rates](https://www.techtarget.com/searchunifiedcommunications/definition/data-transfer-rate) of 10 to 100
megabits per second (Mbps). They are best suited for transmission distances of up to 100 m.

### Coaxial cable

A coaxial, or [coax](https://www.techtarget.com/searchnetworking/definition/coaxial-cable-illustrated), cable is a type
of copper cable specially built with a metal shield and other components engineered to block signal interference.

A coaxial cable is primarily used by cable TV companies to connect their satellite antenna facilities to customer homes
and businesses. Telephone companies also sometimes use coax cable to connect central offices to telephone poles near
customers. Some homes and offices use coaxial cable, but [twisted pair cabling](#twisted-pair) has largely supplanted
coax's widespread use as an [Ethernet](https://www.techtarget.com/searchnetworking/definition/Ethernet) connectivity
medium in enterprises and data centers.

Coaxial cable received its name because it includes one physical channel that carries the signal surrounded by another
concentric physical channel, both running along the same axis. The innermost channel is typically a copper wire, which
is then surrounded by a layer of insulation between it and the outer channel. The outer channel serves as a ground,
typically as copper mesh. Another layer of insulation surrounds both the inner and outer channels.

This construction ensures signals are enclosed within the cable and prevents electrical noise from interfering with the
signal. Many of these cables or pairs of coaxial tubes can be placed in a single outer sheathing and, with repeaters,
can carry information for a great distance.

There are numerous types of coaxial cables, some of which include the following:

- **Hard-line coaxial cable** relies on round copper tubing and a combination of metals as a shield, such as aluminum or
  copper. These cables are commonly used to connect a transmitter to an antenna.
- **Triaxial cable** has a third layer of shielding that is grounded to protect signals transmitted down the cable.
- **Rigid-line coaxial cables** are made up of twin copper tubes that function as unbendable pipes. These lines are
  designed for indoor use between high-power
  [radio frequency](https://www.techtarget.com/searchnetworking/definition/radio-frequency) (RF) transmitters.
- **Radiating cable** mimics many components of the hardline cable, but with tuned slots in the shielding matched to the
  RF wavelength at which the cable operates. It is commonly used in elevators, military equipment and underground
  tunnels.

Coaxial cable design depends on the control of cable dimensions and materials. Controlling these factors helps create a
fixed value for the characteristic [impedance](https://www.techtarget.com/whatis/definition/impedance) of a coax cable.
High-frequency signals are partially reflected at impedance mismatches, causing errors.

Characteristic impedance is sensitive to signal frequency. Above 1 GHz, the cable maker must use a dielectric that does
not attenuate the signal too much or change the characteristic impedance in a way that creates signal reflections.

Electrical characteristics of coax are application-dependent and crucial for good performance. Two standard
characteristic impedances are the following:

- 50 ohms, used in moderate power environments.
- 75 ohms, common for connections to antennas and residential installations.

Depending on the carrier technology used and other factors, [twisted pair copper wire](#twisted-pair) and
[optical fiber](#fiber-optics) are alternatives to coaxial cable.

### Fiber optics

Fiber optics, or [optical fiber](https://www.techtarget.com/searchnetworking/definition/fiber-optics-optical-fiber),
refers to the technology that transmits information as light pulses along a glass or plastic fiber. A fiber optic cable
can contain a varying number of these glass fibers, from a few up to a couple hundred. Another glass layer, called
_cladding_, surrounds the glass fiber core. The buffer tube layer protects the cladding, and a jacket layer acts as the
final protective layer for the individual strand.

Fiber optics transmit data in the form of light particles, or photons, that pulse through a fiber optic cable. The glass
fiber core and the cladding each have a different refractive index that bends incoming light at a certain angle. When
light signals are sent through the fiber optic cable, they reflect off the core and cladding in a series of zig-zag
bounces, following a process called _total internal reflection_. The light signals do not travel at
the [speed of light](https://www.techtarget.com/whatis/definition/speed-of-light) because of the denser glass layers,
instead traveling about 30% slower than the speed of light.

Fiber optic cables are commonly used because of their advantages over copper cables. Advantages include the following:

- They support higher bandwidth capacities and transmit speeds.
- Light can travel further without needing as much of a signal boost.
- They are less susceptible to interference, such as electromagnetic interference.
- They can be submerged in water.
- Fiber optic cables are stronger, thinner and lighter than copper wire cables.
- They do not need to be maintained or replaced as frequently.

However, it is important to note that fiber optics do have disadvantages users should know about. These disadvantages
include the following:

- Copper wire is often cheaper than fiber optics. For example, as the bandwidth capacity of a fiber optic cable
  increases, the more expensive it becomes.
- Glass fiber requires more protection within an outer cable than copper.
- Installing new cabling is labor-intensive.
- Fiber optic cables are often more fragile. For example, the fibers can be broken or a signal can be lost if the cable
  is bent or curved around a radius of a few centimeters.

## 568A and 568B colors

ANSI/TIA-568 is a technical standard for commercial building cabling for telecommunications products and services. The
title of the standard is Commercial Building Telecommunications Cabling Standard and is published by the
[Telecommunications Industry Association](https://tiaonline.org/) (TIA), a body accredited by the
[American National Standards Institute](https://ansi.org/) (ANSI).

Perhaps the best-known features of ANSI/TIA-568 are the pin and pair assignments for eight-conductor 100-ohm balanced
[twisted pair](https://en.wikipedia.org/wiki/Twisted_pair "Twisted pair") cabling. These assignments are named _T568A_
and _T568B_.

This part of the 568 standard provides the colors that we’ll use for our ethernet RJ45 connector or a punch down block
8P8C connectors. These are 8 position 8 conductor.

**This table illustrates the T568A and T568B cabling standards**:

<table style="text-align: center">
  <tbody>
    <tr>
      <th>Pin</th>
      <th>T568A pair</th>
      <th>T568B pair</th>
      <th>10BASE-T 100BASE-TX</th>
      <th>1000BASE-T signal ID</th>
      <th>Wire</th>
      <th>T568A color</th>
      <th>T568B color</th>
    </tr>
    <tr>
      <td>1</td>
      <td rowspan="2">3</td>
      <td rowspan="2">2</td>
      <td>TX+</td>
      <td>DA+</td>
      <td>tip</td>
      <td>white/green stripe</td>
      <td>white/orange stripe</td>
    </tr>
    <tr>
      <td>2</td>
      <td>TX−</td>
      <td>DA−</td>
      <td>ring</td>
      <td>green solid</td>
      <td>orange solid</td>
    </tr>
    <tr>
      <td>3</td>
      <td>2</td>
      <td>3</td>
      <td>RX+</td>
      <td>DB+</td>
      <td>tip</td>
      <td>white/orange stripe</td>
      <td>white/green stripe</td>
    </tr>
    <tr>
      <td>4</td>
      <td rowspan="2" colspan="2">1</td>
      <td style="vertical-align: middle; text-align: center">
        not used
      </td>
      <td>DC+</td>
      <td>ring</td>
      <td colspan="2">blue solid</td>
    </tr>
    <tr>
      <td>5</td>
      <td style="vertical-align: middle; text-align: center">
        not used
      </td>
      <td>DC−</td>
      <td>tip</td>
      <td colspan="2">white/blue stripe</td>
    </tr>
    <tr>
      <td>6</td>
      <td>2</td>
      <td>3</td>
      <td>RX−</td>
      <td>DB−</td>
      <td>ring</td>
      <td>orange solid</td>
      <td>green solid</td>
    </tr>
    <tr>
      <td>7</td>
      <td rowspan="2" colspan="2">4</td>
      <td style="vertical-align: middle; text-align: center">
        not used
      </td>
      <td>DD+</td>
      <td>tip</td>
      <td colspan="2">white/brown stripe</td>
    </tr>
    <tr>
      <td>8</td>
      <td style="vertical-align: middle; text-align: center">
        not used
      </td>
      <td>DD−</td>
      <td>ring</td>
      <td colspan="2">brown solid</td>
    </tr>
  </tbody>
</table>

Most often, the 568A coloring scheme is associated with horizontal cabling, and in most organizations you’ll probably
find that connections for your end users are using the 568B color standard. Ultimately, it doesn’t matter whether your
organization chooses to punch everything down with the 568A color standard or the 568B color standard. **Both of these
standards work exactly the same and have the same functionality, and one is not better or worse than the other.**

The 568A and 568B standards only specify colors. They’re not associated with ethernet crossover cables, and if you want
to know how an ethernet crossover cable is designed, you’ll need to look at the [IEEE standards](https://www.ieee.org/).

## Peripheral cables

One of the most common methods of connecting peripherals to our computers is by using USB, or the universal serial bus
if you’re connecting a mouse, a keyboard, a printer, or almost any other peripheral, you’re probably using USB. One of
the early versions of USB was USB 1.1, and it had two different speeds. It had a low speed, which was 1.5 megabits per
second and a maximum cable length of around 3 meters, and there was also a full speed version of USB 1.1, which
supported 12 megabits per second over a maximum cable size of 5 meters.

Well, upgraded from USB 1.1 to USB 2.0 and increased the total maximum speed to 480 megabits per second over the maximum
5 meter cable size. USB 3.0 is an upgrade to USB 2, and sometimes you’ll see it referred to as super speed USB. It
supports 5 gigabits per second over what usually is about a 3 meter cable. The USB 3.0 standard doesn’t specify a
maximum cable length, but 3 meters is one that’s relatively common.

Some common connectors from the USB 1.1 and 2.0 versions are the Standard-A plug, which is very similar to the
standard-A plug you would find on most devices, the much larger standard-B plug, and then especially on mobile devices,
we use the mini-B plug and the micro-B plug. USB 3.0 change the connectors a bit to be able to support these higher
speeds of throughput. The USB 3.0 standard-B plug is much different than the USB 2.0 version, although the standard-B
plug does look very similar in size and shape. The USB 3.0 micro-B be plug though is very different than the USB 2.0
version.

In recent years, we’ve started to roll out a new type of connector for USB, called the USB-C connector the USB-C
connector is very different than the A connectors that we’re used to using where you have to plug them in on exactly the
right way to get them to work. With USB-C we simply plug-in the connector and there is no top or bottom it will work in
either orientation. USB-C describes the connector itself, and does not describe the type of signal that you’re sending
over that connection. And, indeed, over USB-C, you can send many different types of connections that are not only
related to data, but you could also send video and other signals as well.

The USB-C connector is also quite small. You can see the standard-A plug on the right side, and the traditional micro-B
plug on the left side. The USB-C plug is slightly larger than the micro-B, but not by much. And you can see that it is
symmetric, so That it’s able to work with any orientation.

As the USB standards change, we’re also changing the names of how we refer to these different connections. So each time
there’s an update to USB, all of those connection types are renamed to meet the new standard. If you’re looking at the
USB 3.0 standard, that is referred to as the super speed connector, and it has a maximum speed of 5 gigabits per second.

We released an update to USB 3.0 called USB 3.1. That update changes the name of USB 3.0 to USB 3.1 gen 1. It’s still
superspeed USB. It is still 5 gigabits per second, but in this new standard it has the new name of USB 3.1 Gen 1. USB
3.1 then is technically called USB 3.1 Gen 2, or superspeed plus, and it supports a maximum throughput that is double
the USB 3.1 Gen 1 or 10 gigabits per second.

A new version of USB was released in September of 2017, and that version is USB 3.2. This effectively doubles the
bandwidth available in USB and uses USB C connectors to be able to provide that throughput. This standard uses an extra
lane of communication inside of that USB-C cable to provide that enhanced throughput.

And because this is a new standard, we have renamed all of the old standards. So the standard that used to be USB 3.0,
which we change to USB 3.1 Gen 1 is now called USB 3.2 Gen 1 or superspeed USB 5 gigabits per second. Obviously, the
speed hasn’t changed but the name of the standard has changed in USB 3.2. USB 3.1, which we were calling USB 3.1 Gen 2,
is now called USB 3.2 Gen 2, and it of course, supports exactly the same speeds of throughput.

USB 3.2 Gen 1 times 2 is effectively using twice the number of Gen 1 lanes to provide 10 gigabits of throughput. There’s
also a USB 3.2 Gen 2 times 2. The USB 3.2 Gen 2 is a 10 gigabit per second throughput, so when you double that
throughput with the additional lane, you have a maximum of 20 gigabits per second.

So here’s the summary for USB 3.0, USB 3.1, and USB 3.2. You can see all of the standards with the old names and 3.0 and
3.1 are in this chart, and the USB 3.2 names are listed on the left side, along with the names, the speeds and the logos
that are used for those standards.

Another common peripheral connection type is a Thunderbolt connection. This is a high speed serial connection that is
able to put data and power on the same cable. Sometimes you’ll see these early versions of Thunderbolt using this mini
DisplayPort as the physical connection type. Thunderbolt version 1 is a two channel technology and you can put 10
gigabits per second over each of those channels for a maximum throughput of 20 gigabits per second.

There’s also a Thunderbolt version 2 which has aggregated those channels together giving you a total throughput for
anything connected to that Thunderbolt version 2 of 20 gigabits per second. With Thunderbolt version 3, we’re taking
advantage of the USB-C connector and sending Thunderbolt signals over that USB-C cable. This provides us with a total
aggregated throughput of 40 gigabits per second.

Thunderbolt signals can be set over both copper or fiber connections. If you’re using copper you have a maximum cable
length of 3 meters, and if this is an optical or fiber connection, you’re running 60 meters in length. You can also
daisy chain six different devices together. So you might have a single Thunderbolt interface on the back of your
computer, but all of your peripherals may have multiple Thunderbolt interfaces, so that you can simply extend to six
different devices by simply adding additional cables between all of those different peripherals.

Before we had a universal serial bus, we were using nine pin and 25 pin serial connections on our computers to be able
to connect peripherals. These were commonly used to send RS-232 signals which would allow us to send serial
communication between our computer and other devices, such as a modem. This is a standard that’s been around for such a
long time that it’s very common to still find DB-9 or DB-25 connectors on different devices. This is commonly used these
days to connect to serial consoles that might be on a peripheral device. So if you’re plugging in a switch, a router or
firewall, you might use one of these serial console cables to connect to the device and be able to configure that device
from the command line.

## Video cables

A video format that’s been around for a very long time is the VGA type connector. That stands for Video Graphics Array.
The connector itself is a DB-15, connector although technically that particular size is a DE-15, but very often we just
refer to this as a DB-15 connector.

This connector is also a very unique blue color. That blue color is associated with VGA in the PC System Design Guide
Standards. This is a standard that supports video displays, but it has no way to integrate audio signals within this
video connection. So if you are connecting a monitor using a VGA connection and you need audio output, you’ll need to
have a separate audio connection from that device.

Unlike some of our newer video standards, this VGA signal is an analog signal. So as you extend this VGA signal beyond 5
to 10 meters, you’ll see that the screen becomes fuzzier and more difficult to see as that signal degrades.

The VGA connector on the back of a computer is a 15 pin connector, and it’s a relatively unique connector. You don’t see
other devices using this 15 pin connector. So whenever you see that connector type, you can automatically assume that’s
a VGA connection.

A more modern type of video connection is the HDMI connector or High Definition Multimedia Interface. This is a digital
connection that not only includes the video signal but can also incorporate audio within that same cable. It’s not
unusual to see HDMI cables extending around 20 meters before you start to have dropout and other digital artifacts
appear on the screen. This common type A connector that you most often see with HDMI is a 19 pin connector and it is a
proprietary type specific to HDMI. The only time you’ll see this connector type being used is if you’re connecting to an
HDMI interface.

Here’s the back of a video adapter. You can see that it does support HDMI output on this video adapter. This also
supports DisplayPort interfaces DVI interfaces. We’ll look at those two types next.

DisplayPort is another video standard. It is a digital standard and is able to send packetized video and audio signals
over these DisplayPort cables. There’s commonly two different types of DisplayPort interfaces you might see. The
standard DisplayPort interface is shown here, and there’s a smaller mini DisplayPort interface that can also be used. If
you’re using the larger DisplayPort interface, you’ll notice that there are hooks connected to this particular interface
that lock that into place. So you can’t simply pull it out of a DisplayPort interface. You’ll need to push down on a
release mechanism and then it can easily be removed from that DisplayPort interface.

DisplayPort is also passively compatible with HDMI. So if you have a computer with a DisplayPort interface and a monitor
with an HDMI interface, you simply need a cable that has DisplayPort on one side and HDMI on the other and the
compatibility between those two allows them to work perfectly.

Here’s a video adapter that has an HDMI output and DisplayPort outputs as well. You can see that the DisplayPort
interfaces are shaped to be slightly different than the HDMI. This video card also has a DVI connector at the top as
well and there are many types of DVI interfaces.

DVI stands for Digital Visual Interface. And there are many different types of interfaces in the DVI family. These allow
you to send video signals over what we call single link and dual link. A single link connection supports 3.7 gigabits of
throughput, which allows us to view definition television at 60 frames a second. Dual link connections have effectively
twice as much throughput and allow us to view HD television at 85 frames per second.

DVI is a video connection only and does not pass any audio signals through the DVI connection. DVI supports both analog
and digital connections. You can see an example of the DVI-A or analog connector here at the top. But there are also
DVI-D or digital connections in here as well. You might even have a DVI-I, which is an integrated connection which
allows for both digital and analog communication in the same connector. Here’s the end of a DVI cable. This happens to
be a DVI digital cable on a single link connection, and that would connect to a corresponding interface on your video
adapter card.

So now you should be able to look at the back of any video adapter and be able to immediately recognize what those video
interfaces are. This particular card supports DisplayPort output, HDMI, and both a DVI integrated and DVI digital
connection. You should also be able to find the cables themselves and quickly identify what type of connector it is. On
this screen, we have a VGA connector, a DVI connector, and HDMI.

## SATA device cables

One very common interface type for our storage devices inside of our laptop computers and desktop computers is SATA.
SATA stands for Serial AT Attachment. And there have been many different SATA versions throughout the years. The first
version of SATA, SATA revision 1.0, transferred data at 1 and 1/2 gigabits per second over a 1 meter cable. SATA
revision 2.0 doubled that speed to 3 gigabits per second. Version 3.0 doubled it again to 6 gigabits per second. And
SATA revision 3.2 increased the speed to 16 gigabits per second over that 1 meter data cable inside of your computer.

SATA is used exclusively inside of our computers. If you have an external storage device, you’re probably connecting
with eSATA or external SATA. This matches the speeds that are used on those revisions of internal SATA versions, but it
allows for a maximum cable length of 2 meters. These are the SATA connectors on a hard drive. The smaller seven pin
connector is used for data transfer. And this larger 15 pin connector is used to power the device. This hard drive also
has a power connector for a molex connector. So if you’re transitioning a system to a newer SATA drive, but it still has
an older power supply, you can use the older molex connection. Or if your power supply supports it, the newer 15 pin
SATA connection.

These connections for power and for data are one to one connections. So you have a single power connection coming off of
your power supply. That single connection plugs into that single connector on the back of your storage drive. You also
have a single data connector on your motherboard. That single data connector provides a single connection for a storage
device using that data connector. Unlike some previous storage types, a SATA connection has a single cable supporting a
single storage device.

Here’s a motherboard. This one has a CPU and space for memory. And you can see down here at the bottom are some SATA
connectors. If we zoom up on this, you can see that we have SATA revision 2 and SATA revision 3 interfaces. And these
also have different colors to designate the difference between the versions. The colors can change depending on the
motherboard. This motherboard has yellow SATA connectors. And it’s a pair of SATA connectors that are next to each
other.

These SATA connections go directly from the motherboard into the storage device itself. You can see we have three
separate motherboard connections, and the black, yellow, and blue cables are plugging into the black, yellow, and blue
connectors on these three separate storage drives. For these storage drives to work, you would also, obviously, need to
connect the power connections for each of these three drives. Here’s another storage drive. This one does not have that
molex connector. So the only way to power this drive is with the SATA power that’s included on the drive itself. And you
would also connect the data connection to your motherboard. Usually you have that cable coming directly from the
motherboard, plugging into the drive, and now you’re able to access all of the data on the drive once you add both the
data and the power connection to this storage device.

As we mentioned earlier, there’s not only this internal connection for SATA, there’s also an external version called
eSATA. And on this device there is an eSATA adapter card with two separate external SATA links built into the computer
itself. These use the same standard for connectivity that we have with our internal SATA connections. But the connector
itself, although looks physically similar to the internal connector, is a very different connector type when you’re
using eSATA.

If we look at a SATA interface on your motherboard, it has this L shape associated with it. If we look at an external
eSATA connector, it’s slightly larger and does have a very different layout. This means that if you’re connecting an
eSATA drive, you’ll need an eSATA cable. And if you’re plugging into an internal SATA drive, you will need a SATA cable.
Many storage drives have different options for connectivity. This external storage drive has FireWire, USB 2, and eSATA
as some of those options. If you’re using that eSATA connection, you would plug-in to the storage drive, connect that
eSATA cable to the eSATA interface on your computer, and now you’ll be able to transfer data from this external storage
device.

## SCSI device cables

SCSI or what we refer to in the industry as SCSI, is the Small Computer Systems Interface. This is a standard interface
that can be used to connect to storage devices, scanners, printers, and other devices on your network. This was
originally designed so that you can have many devices connected to one single interface on your computer by daisy
chaining multiple devices together. And many of the SCSI standards support up to 16 devices in one of those single SCSI
chains.

This is a standard that’s been around for quite some time. So you’ll find a number of different SCSI standards with
different types of interfaces and different types of cables for each one of these standards. One of the newest standards
is iSCSI or SCSI over IP. And certainly, you’ll find a lot of SCSI implementation in virtual networks. And if you look
at some of the other connectivity that we use for storage devices, such as PATA, which is a parallel connectivity, and
SATA, which is serial connectivity, SCSI can support both parallel and serial connectivity, depending on which type of
format you’re using for that SCSI connection.

Before we had the SATA standard or was able to use USB to be able to connect our peripherals, we used SCSI. SCSI was
used to connect our scanners and our CD-ROM drives and our tape backup systems. And we had SCSI connectivity inside of
our computers and external interfaces that you could also use. And as I mentioned earlier, you can daisy chain these
devices. So a single interface on your computer might support eight different SCSI devices on a narrow bus, or up to 16
if you’re using a wide bus version of SCSI.

One of the benefits of SCSI and the protocols that are used to communicate over this SCSI connection is that it is a
very intelligent form of connectivity. You simply provide the basic connectivity, and SCSI takes care of identifying
what devices are in that chain and how to access those devices over the SCSI connection. And although SCSI doesn’t have
the popularity that it had in the past, you mat still find systems that have SCSI drives or other types of SCSI
connectivity. And SCSI as a standard is one that’s used extensively on our virtual systems.

Here’s a somewhat dated motherboard that does have a SCSI connector on it. This motherboard also has a floppy drive
connector and an integrated drive electronics, or IED interface. Today we refer to these interfaces as PATA interfaces.
On the left side is the SCSI interface. This is an Ultra 3 interface. It has 68 pins on this connector. If we turn the
motherboard on its side, we can see exactly the pins that are used for this particular cable. The cable itself is a 68
pin cable. You can see where it plugs into the motherboard. And you can see along the length of this ribbon cable are
connections that you can use to attach other SCSI devices.

That’s 68 pin connector that we see on the motherboard is just one of many types of SCSI connections. You can see that
they have changed quite a bit through the years. And you may find that one or more of these connectors is being used by
SCSI devices that might be in your data center. When you have a single interface on your computer that you’re connecting
multiple devices to, you need some way to be able to differentiate between all of these separate devices you’re
connecting to the same cable.

In SCSI we’re able to accomplish this by using a SCSI ID number. So every device you would connect to that particular
SCSI cable would all have a separate ID number associated with it. So your computer might be a SCSI ID 0. You might be
connecting to your computer a hard drive on that cable. That can be assigned an ID number of 2. And you might have
another device on that cable, such as CD-ROM, and you would assign a separate SCSI ID to that device, for example SCSI
ID 3.

If you think about connectivity to a drive array, it’s a single chassis with many different drives inside of it. Because
of this, SCSI has a method, not only to identify the chassis of that drive array through a SCSI ID, but we can identify
individual drives by a logical unit or LUN. That logical unit allows you to reference a single drive within a much
larger SCSI ID device. It’s also very common on this cable that at the end of the cable you place a SCSI terminator. The
SCSI terminator allows you to have multiple devices on this wire and still be able to communicate across all of those
devices simultaneously.

One of the more recent standards for SCSI is a serial attached SCSI or SAS. These devices are much simplified over the
older SCSI configurations that require you to manually set a SCSI ID and to always have a terminator on the connection.
With these newer SAS devices, you don’t have to worry about setting jumpers for SCSI IDs. You don’t have to install any
terminators or make any additional settings to be able to use those serial attached SCSI devices.

Here’s the back of an external SCSI storage device. You see we have a spot for power. Looks like there’s a fan inside of
this device or some type of cooling. And here are the SCSI interfaces, one that is a SCSI out and one that is a SCSI in.
This is how you would be able to daisy chain this particular device along with other SCSI devices on the same cable.
This SCSI device has been assigned a SCSI ID of 6. And you can see there are buttons on this device that allow you to
modify the SCSI ID to prevent any conflicts on that same cable.

So if you look inside of a computer that has a SCSI controller and multiple SCSI hard drives, you’ll probably see the
SCSI controller set to a SCSI ID of 0. And then there’s probably a cable from that device that goes to the first hard
drive. And that drive is daisy chained to, in this case, a second hard drive. And then at the end of that cable is a
SCSI terminator. This is what the SCSI terminator looks like that is connected to the end of that SCSI cable.

So if you look inside one of these computers with SCSI interfaces, you may find a cable that looks something like this.
You can see that it plugs into the motherboard. It’s got a long set of cables. Here’s one connector for a storage
device. Another connection, a third, a fourth, and then finally a terminator at the end of this cable. So inside of the
computer we would use a cable like that to connect to the motherboard. And then one of those other connectors would
connect to the SCSI drives that are inside of our system.

Here’s a view of the SCSI connection outside of a computer case. You can see the motherboard is on the top with that
SCSI connector. And that single ribbon cable wraps around. And one of the interfaces on that ribbon cable connects to a
storage drive. You can see there are multiple interfaces on this cable. So we can continue to add storage drives as long
as we have connectors on this cable.

In our next video, we’ll talk about how we moved from the PATA or parallel communication to SATA or serial
communication. And SCSI has had a very similar evolution. One of the more recent standards for SCSI is the serial
attached SCSI where we went from parallel communication to a serial communication. This not only increased the total
throughput that we could have in our systems, but it greatly simplified the implementation in our computers. Because
this is a point to point connection between the motherboard and the drive.

We no longer have these cables with multiple interfaces or devices with multiple SCSI interfaces, because there’s no
more daisy chains. We also removed the need to have a terminator, because the only thing on the serial attached SCSI
connection is the controller on one side and the hard drive or storage device on the other. This gives us the control
and management of a well-established SCSI set of protocols, but it also provides us with the speeds we need for our most
modern storage devices.

Here’s a serial attached SCSI drive. You can see it looks very similar to a SATA drive. But the connectors on the back
are slightly different, and they do require a different set of connectors. An example of this very large connector that
is a high density internal SAS connector that you would use inside of your computer. And of course, there are also
serial attached SCSI arrays so that you can connect many different serial attached SCSI drives into this single chassis.

## PATA device cables

If you’re working with some legacy equipment, you may find storage devices inside of those computers that are connected
with a ribbon cable just like this one. This is a connectivity called PATA or the Parallel AT Attachment. You might also
see this referred to as Parallel ATA or simply ATA. The name AT Attachment comes from one of the original PCs created by
IBM, which was the PC/AT and the AT attachment standard was the one used to connect drives within that system.

There have been a number of different versions of PATA through the years. And originally we didn’t even call it PATA. We
called it IDE or Integrated Drive Electronics. This was a name created by the hard drive manufacturer Western Digital.
They even had an updated version of IDE called Enhanced IDE or EIDE.

Through the years, the speeds of PATA continued to improve and you can find versions of PATA that range from 16
megabytes per second through 133 megabytes per second as a total throughput. There are also other drives that can
connect to PATA, not just hard drives. You may even find CD-ROMs or DVD-ROMs that have a PATA connection on those as
well. So although you may find motherboards and other equipment that are referring to an ATA drive or an IDE connection,
today we refer to all of these as Parallel ATA or PATA.

Here’s an image of two different types of PATA cables. The one on the top is a 40 wire PATA cable and the one on the
bottom is an 80 wire PATA cable. With both of these cables, there is a connection on one end that is a 40 pin connector
for the motherboard and then there are two separate 40 pin connectors later on down the ribbon cable. On the 40 wire
cable, the first device that you would connect is referred to as device 0 in the PATA standard. And the device
connecting on the end of the cable is device one. Those two are swapped on the 80 wire cable. Device one is the first
interface on the cable and device 0 is at the end.

The 40 wire cable was the original PATA cable. And then as we increase the speeds for PATA, we needed some way to
decrease the amount of crosstalk between all of these wires, so we doubled the number of wires while keeping the number
of pins on the connectors exactly the same. And this minimizes the crosstalk over these higher speeds that are used over
80 wire cables.

This is a 40 wire cable. And if we put an 80 wire cable right next to it, you can see visually they’re quite different,
because the 80 wire cable obviously has twice the number of wires inside of the ribbon cable.

The PATA connectors are also quite large relative to the SATA connectors you might already be familiar with. This
motherboard has a PATA connector right at the bottom and it’s quite large compared to the other connectors. If we zoom
up, we can see all 40 pins inside of that connector. And you’ll notice that one of the pins is missing. That’s because
this 40 pin connector is symmetrical. So that missing pin allows us to properly orient the cable into the right format
when we’re plugging it into that connector. You might also notice there’s a notch at the bottom as well, which also
helps when orienting the cable.

If you look at the end of the cable, you’ll see how this works. There’s a notch built into the PATA cable. And you can
see in all of these PATA connectors that we are missing that hole that’s in the connection so that you couldn’t possibly
plug it in in the wrong orientation. Here’s a better look at the interface on the motherboard. You can easily see that
there is a notch at the bottom. And there’s your missing pin right in the middle of the PATA connector.

The connector that you would find on a storage device is identical to the connector that you would find on a
motherboard. It’s this 40 pin symmetrical connector. You can see the notch in the bottom and the missing pin right in
the middle of the PATA connector.

As I mentioned earlier, PATA is a legacy technology. It’s not one you’d commonly find in our newer systems. But if you
do run into one of these 40 pin ribbon cables, then it’s probably a PATA device that you’re working with. Next to this
PATA data cable is a SATA data cable. And you can see that it is much smaller than this very large ribbon cable used for
PATA, and it takes up much less space inside of our systems than this older PATA technology.

## Adapters and converters

It happens to all of us. We’re ready to connect some devices together. We pull out our cables, and we realize we don’t
have the right cables for this particular interface. But there are ways to convert interfaces from one format to
another. And to be able to do that, we’ll need an adapter or a converter. Usually we’re making these conversions between
systems that are electrically compatible.

This makes it very easy to have one interface on one end of a cable, a different type of interface on the other end of
the cable, and plug both of them together and still have everything work properly. Or there may be times that instead of
adapting one interface to another, we need to convert those signals from one format to another. A good example is if we
had an adapter that allowed us to convert from USB to something like an ethernet connection. Sometimes these can be
temporary fixes or they might be a permanent workaround for a lack of interfaces on a system.

Here’s an example for an adapter that is converting between electrically compatible systems. DVI-D, which is the digital
version of DVI, is electrically compatible with HDMI, which of course, is a digital medium. These can be in a single
adapter that we see here or it might be a cable that has the DVI-D connector on one side and the HDMI connector on the
other. You don’t have to have any type of converter in the middle. There’s nothing that needs to be powered. You simply
connect these together and they’ll be able to transfer the data between systems. Here’s a better look at the DVI to HDMI
adapter. You can see it is a very basic adapter with the DVI-D connector on one end and the HDMI connector on the other.

There’s also a similar compatibility on the analog video side with a DVI-A for analog connecting to a VGA connection,
which is also analog. Although there is compatibility between these two formats, the only supported resolution is 640
by 480. You may only need a single adapter to make this work. You can see an example of one of these here where VGA is
on one side and the DVI analog is on the other.

If you need to connect VGA, which is an analog signal, to a DVI-D, which is a digital signal, then you’ll need something
in the middle that will convert that signal from analog to digital so you’ll have the compatibility between those two
systems. But if all you need is simple connectivity of analog signals, then you need an adapter that has DVI-A for
analog on one side and the VGA connector on the other.

If you have a relatively new laptop, you may find that there is no RJ45 five or wired ethernet connection on that
laptop. It is designed to be used over wireless ethernet. But there may be times when you need that wired connection. To
be able to use that wired ethernet connection on your laptop, you might want to use a converter like this one that
converts between a USB connection and provides you with an ethernet connection on the other side.

This can get even more complicated if you have a newer laptop that has USB-C but it does not have a USB-A connection. In
those cases, you might need an adapter that can convert between USB-C to USB-C. And from there you might have a separate
adapter that has a USB-A to ethernet connection. So using multiple adapters or converters may eventually provide you
with the interface you need.

And if you’re often in a situation where you’re never quite sure exactly which type of interface you need, you might
want to use a USB hub like this one. It plugs into your system with a USB connection, in this case USB-C, and then you
have multiple types of interfaces on this hub. This hub appears to support HDMI, ethernet, a number of USB connections,
and it even has slots for flash memory.

## Copper connectors

If you’ve connected a traditional analog telephone or you use DSL on your network, you’ve probably used an RJ11
connector. This is referred to as a 6 position, 2 conductor connector, because although there are two wires inside of
this connector, there are actually six positions where other wires could be. And in fact, you might find an RJ11
connector that has some additional wires inside of it so that there may be six positions and four conductors. This is
commonly used for phone connections. And if you’re plugging in to a DSL modem, you’ll often find RJ11 is right on the
modem itself.

If you’re connecting the ethernet, then you’re probably using an RJ45 connector. This looks very similar to an RJ11
connector, but this is an 8 position, 8 conductor connection. You can see all eight of these conductors are on the back
of this RJ45 cable. This is commonly used for ethernet, although you may find RJ45 used for other types of connections
as well. Here’s an example of an RJ11 and RJ45 connectors next to each other. This is on the back of a DSL modem. You
can see the DSL connector is the smaller RJ11. And then the ethernet LAN connectors are RJ45 connectors.

If you have cable television, then you’re probably familiar with the F connector. This connector is used on a coaxial
cable. And it has a threaded connection at the end to physically screw onto the connection so that it can’t easily pull
off of the device. You might also use an F connector if you subscribe to an internet connection from your cable company.
This is usually brought in with a standard called DOCSIS, which is Data Over Cable Service Interface Specification.

Here’s the view from the back of a cable modem. We have a male F connector connecting to the female side of the F
connector. It screws onto this connection with these threads. And that keeps it in place so that it can’t easily be
removed from the cable modem. If you work in a data center or a large computer room, you may have a number of punch down
blocks on the back wall that’s used to connect users to the network. This is a wiring panel where the wires themselves
are physically pushed or punched into the block itself. And there’s usually a connector that’s added on top of these
wires or on the other side of the wiring block.

This allows you to permanently attach these wires into a wiring block, making it much easier to manage these wires in
your data center. Here’s a close up of one wiring block. You can see these wires have been punched down using a punch
down tool into the wiring block. You can almost see the connectors that push through the insulation of these wires to
make contact with the copper that’s on the inside. This is another set of punch downs. This is on a wiring block that
has this punch down on one side. And if you’re to see the other side of this block, there would be RJ45 connectors to
complete the circuit.

Another set of popular connectors are used with Universal Serial Bus or USB. These are USB 1.1 and 2.0 connectors. The
standard A plug is very common. The standard B plug is used for peripherals, especially printers. And we have mini B
plugs and micro B plugs that are commonly used for mobile devices. The increased bandwidth in the USB 3.0 specification
required that some of these connectors be changed. And you can see there are differences with the USB 3.0 standard B
plug and the micro B plug that’s commonly used on those smaller connections. The USB 3.0 standard A plug is identical in
size to the previous standard A plugs. But there are additional pins inside of this connector to support the higher
speeds and bandwidth used by USB 3.0.

A newer style of USB connector is the USB C connector. This USB C connector is double-sided, so there’s no top or
bottom. You can plug it in either orientation. It also is very small. It’s about the same size as the original USB micro
B plug. And you’ll find the USB C plugs are used, not only on our peripheral devices, but they’re also used on our
computers as well. This USB C plug is used for more than just serial connections. We can run different signals through a
USB C cable. So you might see it used for serial connectivity, Thunderbolt devices, or DisplayPort devices.

One type of wiring connection that’s been around for a very long time is one that we refer to as a molex connector. This
is a four pin power connector. It was originally created by the Molex connector company, which is why we refer to it as
a molex connector. AMP makes a version of this connector called the MATE-N-LOK. And the single connector is designed to
provide both 12 volt and 5 volt power for devices inside of your computer. So if you have a hard drive or optical drive
that needs power or you need to power up the fans that are inside of your system, you may be able to use these molex
connectors.

One way to tell if you have these molex connectors available in your computer is to look on your power supply itself.
There’s probably a number of wires coming off of that power supply. And you’re looking for the molex connectors or these
four pin power connectors that are already connected to that power supply. If you have an Apple device, you may be using
a Lightning connector. This is an 8 pin connector that’s used to transfer data and provide power for certain models of
iPhones and iPads.

This Lightning connector was introduced when micro USB was a common connector type for mobile devices. But Lightning
allows us to have additional power output, especially for these larger phones and tablets. And unlike a micro USB
connector, the Lightning connector doesn’t have a top or bottom. You can plug it in either orientation. If you work a
lot with infrastructure devices that have console connections, then you’re probably still using a DB9 connector.

This DB9 stands for a D-subminiature connector. And the size of this connector is the B size that supports nine pins.
These are commonly used to send RS232 signals from your device to, commonly, a serial port on the other side. This was
originally used for modems and other serial devices. But if you’re working in a data center these days, the DB9
connector is commonly used for switches, routers, and other infrastructure devices. So on this fiber switch, you can see
there is a serial console using that DB9 connection. And you would use that to be able to manage this device at the
command line.

## Fiber connectors

If you’re working in a large computing environment or you’re working in a data center, you probably have some
connections using fiber optics. In this video, we’ll look at some of the connectors that are used on these fiber links.

One of the challenges with any type of network connection is that there’s only so much real estate on a switch. So if
you have a smaller connector, you can fit more interfaces on the same amount of real estate.

One of these smaller types of fiber connectors is an LC connector, or local connector. An LC connector is a single
interface that has inside of it two separate fiber connections. Usually, one of these is for transmit and the other one
is for receive. These can also be used as separate strands of connections. So it just depends on the type of connection
you’re using and how many interfaces might be available on that switch.

Another popular fiber connector is the ST connector. We sometimes refer to this as a straight tip connector. That name,
straight tip, comes from the end of the connector, where we have this long ferrule that’s sticking out. And you can see,
it plugs in and locks into the connection with a quarter turn using a bayonet connection.

And another popular fiber connector is the SC connector. This commonly refers to subscriber connector, but some people
refer to it as a square connector because the ends of this connection type have this square quality about them. This is
another connector type that’s often combined together in a single connector, but you can also break those apart and use
them as separate runs as well.
