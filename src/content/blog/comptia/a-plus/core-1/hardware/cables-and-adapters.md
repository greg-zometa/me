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

f you look at networks that are installed between different organizations, you’ll notice that the method used for
installing the network and even the colors that are used for each pin are exactly the same in every single one of these
organizations. That’s because we’ve created standards that provides us with guidelines on exactly how these networks
should be installed.

One of these international standards is the ISO/IEC 11801 cabling standards. And in the United States, North America
you’ve probably heard of the Telecommunications Industry Association or TIA. The TIA standard for cabling is the TIA 568
standard, which is the Commercial Building Telecommunications Cabling Standard, and you can learn more about it on the
TIA website at tiaonline.org.

There is a lot of information in this TIA 568 standard, but in this video we’re going to talk about one very specific
part of the standard that deals with what color wires you use on what pins of an ethernet connection. This is referred
to as the pin and pair assignments of eight-conductor 100-ohm balanced twisted pair cabling. And as an abbreviation, we
often just refer to this as T568A and T568B.

This part of the 568 standard provides you with two options you can use when punching down or applying different colored
wires to your ethernet connection. If you look at an ethernet RJ45 connector or a punch down block that’s used for
ethernet, you’ll notice that there are two different standards that are addressed. One is the 568A and one is the 568B.
These two standards provide us with the colors that we’ll use for our 8P8C connectors. These are 8 position 8 conductor
connectors.

Most often, the 568A coloring scheme is associated with horizontal cabling, and in most organizations you’ll probably
find that connections for your end users are using the 568B color standard. Ultimately, it doesn’t matter whether your
organization chooses to punch everything down with the 568A color standard or the 568B color standard. Both of these
standards work exactly the same and have the same functionality, and one is not better or worse than the other.

As a quick fact check, you may find in other training materials and courses that they define an ethernet crossover cable
as a 568 color scheme on one side of the cable, and a 568B color scheme on the other side of the cable. In a future
video on crossover cables, we’ll visually show you how 568A on one side of the cable and 568B on the other side of the
cable clearly is not the pin-out for a gigabit ethernet crossover cable.

The 568A and 568B standards only specify colors. They’re not associated with ethernet crossover cables, and if you want
to know how an ethernet crossover cable is designed, you’ll need to look at the IEEE standards.

Here are the color schemes for 568A and 568B. We’re taking this from an ethernet RJ45 connector, which has eight
different wires inside of it. And you can see they’re numbered 1 through 8. These are the colors that you would use
inside of that connector if you are wiring that connector for T568A. You can see there is a slight difference if you’re
wiring it for T568B.

You can see that pins 1 in 2 are different in 568A. We’re dealing with white and green green versus white and orange and
orange. We can also see that the orange and green colors have also been changed between these two standards between pins
3 and pin 6. Interestingly, pins 4 and 5 and 7 and 8 are exactly the same between the A and the B standard.

The way that you would tell what standard is in use is you can look at the back of an ethernet cable and see exactly
what the colors might be on this particular pin out. You can see on pins 1 and 2 that we have some orange colors, and we
can see there’s blue colors in the middle. If we overlay the 568B colors, you can see that they match this particular
connector exactly. So you can see that the person who created this cable decided to use the 568B coloring scheme, and if
you looked at the other end of the cable, you would see that it uses exactly the same colors on that end as well.

Although many organizations do use 568B, you may run into organizations that prefer to punch everything down with 568A
colors. So you may notice on punch down blocks or interfaces that you would install that there are colors assigned for A
and other colors assigned for B. You can see on this block that it shows you both color schemes. We have the A color
scheme along the top and the B color scheme along the bottom, and you simply have to match the wires when you’re
installing it into this particular block.

You can see in this description of the colors that the blue colors and the brown colors are exactly the same between the
A and the B standard, and that does correlate back to the colors we were looking at earlier. You can see for A you would
put orange wires into these two slots and green wires into the last two. So it looks like in this particular case, this
user is wiring this block with the 568A standard.

Here’s another example of a block that has the different colors assigned for A and B. And you can see on this side of
the block, we have the four colors that we would use for A or the four colors that we would use for B. If we were to
turn this block around, we would see four more colors that associate with the four different connectors on the other
side of the block.

## Peripheral cables

## Video cables

## SATA device cables

## SCSI device cables

## PATA device cables

## Adapters and converters

## Copper connectors

## Fiber connectors
