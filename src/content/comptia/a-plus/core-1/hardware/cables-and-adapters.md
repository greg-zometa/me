---
title: Cables and Adapters
description: There's a lot to know about cables. Take my hand and let me walk you through the overwhelming amount of cables used in hardware.
pubDatetime: 2023-09-05T15:16:47.538Z
postSlug: hardware-cables-and-adapters
dynamicOgImg: https://images.unsplash.com/photo-1683322499436-f4383dd59f5a
tags:
  - a-plus
  - core-1
  - hardware
  - certification
  - studying
---

This post will cover various aspects of the **Hardware** section of the [CompTIA A+](https://www.comptia.org/certifications/a) Core 1 certification endeavor.

## Table of contents

## Network cables

The main types of network cables are coax, fiber optics, and shielded and unshielded twisted pair. As enterprises deploy new technologies, it's critical to select the right cables.

### Twisted pair

A [twisted pair](https://www.techtarget.com/searchdatacenter/definition/Categories-of-twisted-pair-cabling-systems) cabling system is a cable consisting of one or several pairs of copper wires. In the pair, one wire is used to transmit data, and the other is the [ground](https://www.techtarget.com/whatis/definition/ground) reference. These wires are twisted together and around each other and are insulated with a dielectric polymeric compound. Twisting helps minimize [electromagnetic radiation](https://www.techtarget.com/whatis/definition/radiant-energy) and resists external interference. It also helps limit interference with adjacent twisted pair cables.

Twisted pair cables were among the earliest guided transmission media, along with [coaxial cables](#coaxial-cable). Today, twisted-pair cables are used in many applications in networking and communication, for example, in telephone lines, [Digital Subscriber Line](https://www.techtarget.com/whatis/reference/Fast-Guide-to-DSL-Digital-Subscriber-Line) and [local area networks](/posts/networking-internet-connections#local-area-network).

To prevent noise, signal interference and [crosstalk](https://www.techtarget.com/searchnetworking/definition/crosstalk) during transmissions, twisting is introduced into conducting cables. Twisting reduces the strength of noise signals and cancels out external waves by moving a part of the noise in the direction of the signal and another part in the opposite direction. Since the receiver can calculate the [voltage](https://www.techtarget.com/whatis/definition/voltage) difference of two wires to retrieve data more efficiently, twisting provides better noise immunity and lower signal attenuation.

Two types of copper [conductors](https://www.techtarget.com/whatis/definition/conductor) may be used in twisted-pair cable:

1. **Solid** — A solid conductor twisted-pair cable, with a single strand of copper, offers better transmission performance over long distances, making it suitable for use in permanent lines and [backbone](https://www.techtarget.com/searchnetworking/definition/backbone) cabling with the use of an insulation displacement connector, or IDC.
2. **Stranded** — A twisted-pair cable with stranded wiring consists of multiple smaller wires woven together. It has high signal [attenuation](https://www.techtarget.com/searchnetworking/definition/attenuation), which limits its performance distance. That is why it is usually used only in patch cord production for local connections.

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

Unshielded twisted pair ([UTP](https://www.techtarget.com/searchnetworking/definition/Unshielded-Twisted-Pair)) cables generally comprise wires and insulators. As the name suggests, a UTP cable has no internal shielding. The UTP cable is the most common twisted-pair cable used in Ethernet networks. It also is used for traditional telephone (UTP-Cat1) systems.

UTP cables are popular all over the world due to their low cost, ease of installation and flexibility. They also support high data transfer speeds of up to 1 gigabit per second (Gbps) for transmission distances of up to 100 meters (m). These cables are also easy to expand and troubleshoot.

One crucial drawback of UTP is that it is vulnerable to signal interference, which can affect output quality. Moreover, it is not suitable for long-distance transmissions. To support distances longer than 100 m, repeaters are required.

#### STP

Shielded twisted pair ([STP](https://www.techtarget.com/searchnetworking/definition/shielded-twisted-pair)) cables come with a braided, wired mesh that encases each pair of insulated copper wires. STP cables include a shielding, usually made of aluminum foil, around the conductors to isolate the conductors and improve the cables' resistance to [noise](https://www.techtarget.com/whatis/definition/noise) and signal interference. One drawback is that STP cables are more difficult to connect at termination points. Also, STP cables are more expensive than UTP cables. Nonetheless, they prevent signal interference better than UTP cables, so their additional cost can be worth it, depending on the application.

Shielded cables support [data transfer rates](https://www.techtarget.com/searchunifiedcommunications/definition/data-transfer-rate) of 10 to 100 megabits per second (Mbps). They are best suited for transmission distances of up to 100 m.

### Coaxial cable

A coaxial, or [coax](https://www.techtarget.com/searchnetworking/definition/coaxial-cable-illustrated), cable is a type of copper cable specially built with a metal shield and other components engineered to block signal interference.

A coaxial cable is primarily used by cable TV companies to connect their satellite antenna facilities to customer homes and businesses. Telephone companies also sometimes use coax cable to connect central offices to telephone poles near customers. Some homes and offices use coaxial cable, but [twisted pair cabling](#twisted-pair) has largely supplanted coax's widespread use as an [Ethernet](https://www.techtarget.com/searchnetworking/definition/Ethernet) connectivity medium in enterprises and data centers.

Coaxial cable received its name because it includes one physical channel that carries the signal surrounded by another concentric physical channel, both running along the same axis. The innermost channel is typically a copper wire, which is then surrounded by a layer of insulation between it and the outer channel. The outer channel serves as a ground, typically as copper mesh. Another layer of insulation surrounds both the inner and outer channels.

This construction ensures signals are enclosed within the cable and prevents electrical noise from interfering with the signal. Many of these cables or pairs of coaxial tubes can be placed in a single outer sheathing and, with repeaters, can carry information for a great distance.

There are numerous types of coaxial cables, some of which include the following:

- **Hard-line coaxial cable** relies on round copper tubing and a combination of metals as a shield, such as aluminum or copper. These cables are commonly used to connect a transmitter to an antenna.
- **Triaxial cable** has a third layer of shielding that is grounded to protect signals transmitted down the cable.
- **Rigid-line coaxial cables** are made up of twin copper tubes that function as unbendable pipes. These lines are designed for indoor use between high-power [radio frequency](https://www.techtarget.com/searchnetworking/definition/radio-frequency) (RF) transmitters.
- **Radiating cable** mimics many components of the hardline cable, but with tuned slots in the shielding matched to the RF wavelength at which the cable operates. It is commonly used in elevators, military equipment and underground tunnels.

Coaxial cable design depends on the control of cable dimensions and materials. Controlling these factors helps create a fixed value for the characteristic [impedance](https://www.techtarget.com/whatis/definition/impedance) of a coax cable. High-frequency signals are partially reflected at impedance mismatches, causing errors.

Characteristic impedance is sensitive to signal frequency. Above 1 GHz, the cable maker must use a dielectric that does not attenuate the signal too much or change the characteristic impedance in a way that creates signal reflections.

Electrical characteristics of coax are application-dependent and crucial for good performance. Two standard characteristic impedances are the following:

- 50 ohms, used in moderate power environments.
- 75 ohms, common for connections to antennas and residential installations.

Depending on the carrier technology used and other factors, [twisted pair copper wire](#twisted-pair) and [optical fiber](#fiber-optics) are alternatives to coaxial cable.

### Fiber optics

Fiber optics, or [optical fiber](https://www.techtarget.com/searchnetworking/definition/fiber-optics-optical-fiber), refers to the technology that transmits information as light pulses along a glass or plastic fiber. A fiber optic cable can contain a varying number of these glass fibers, from a few up to a couple hundred. Another glass layer, called _cladding_, surrounds the glass fiber core. The buffer tube layer protects the cladding, and a jacket layer acts as the final protective layer for the individual strand.

Fiber optics transmit data in the form of light particles, or photons, that pulse through a fiber optic cable. The glass fiber core and the cladding each have a different refractive index that bends incoming light at a certain angle. When light signals are sent through the fiber optic cable, they reflect off the core and cladding in a series of zig-zag bounces, following a process called _total internal reflection_. The light signals do not travel at the [speed of light](https://www.techtarget.com/whatis/definition/speed-of-light) because of the denser glass layers, instead traveling about 30% slower than the speed of light.

Fiber optic cables are commonly used because of their advantages over copper cables. Advantages include the following:

- They support higher bandwidth capacities and transmit speeds.
- Light can travel further without needing as much of a signal boost.
- They are less susceptible to interference, such as electromagnetic interference.
- They can be submerged in water.
- Fiber optic cables are stronger, thinner and lighter than copper wire cables.
- They do not need to be maintained or replaced as frequently.

However, it is important to note that fiber optics do have disadvantages users should know about. These disadvantages include the following:

- Copper wire is often cheaper than fiber optics. For example, as the bandwidth capacity of a fiber optic cable increases, the more expensive it becomes.
- Glass fiber requires more protection within an outer cable than copper.
- Installing new cabling is labor-intensive.
- Fiber optic cables are often more fragile. For example, the fibers can be broken or a signal can be lost if the cable is bent or curved around a radius of a few centimeters.

## 568A and 568B colors

ANSI/TIA-568 is a technical standard for commercial building cabling for telecommunications products and services. The title of the standard is Commercial Building Telecommunications Cabling Standard and is published by the [Telecommunications Industry Association](https://tiaonline.org/) (TIA), a body accredited by the [American National Standards Institute](https://ansi.org/) (ANSI).

Perhaps the best-known features of ANSI/TIA-568 are the pin and pair assignments for eight-conductor 100-ohm balanced [twisted pair](https://en.wikipedia.org/wiki/Twisted_pair "Twisted pair") cabling. These assignments are named _T568A_ and _T568B_.

This part of the 568 standard provides the colors that we’ll use for our ethernet RJ45 connector or a punch down block 8P8C connectors. These are 8 position 8 conductor.

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

Most often, the 568A coloring scheme is associated with horizontal cabling, and in most organizations you’ll probably find that connections for your end users are using the 568B color standard. Ultimately, it doesn’t matter whether your organization chooses to punch everything down with the 568A color standard or the 568B color standard. **Both of these standards work exactly the same and have the same functionality, and one is not better or worse than the other.**

The 568A and 568B standards only specify colors. They’re not associated with ethernet crossover cables, and if you want to know how an ethernet crossover cable is designed, you’ll need to look at the [IEEE standards](https://www.ieee.org/).

## Peripheral cables

Alternatively called an auxiliary device, a peripheral is a hardware input device or output device that gives a computer additional functionality. Peripheral devices, however, are not essential for the computer to perform its basic tasks; they are an enhancement to the user's experience.

Today, most non-wireless peripheral devices use one of the following types of cables and connections to connect to a computer. These cable and connection types are listed in order of most common to least common:

- [USB](/posts/mobile-devices-device-configuration/#usb-connectors) — Short for **universal serial bus**, is a [plug and play](https://www.computerhope.com/jargon/p/pnp.htm) interface that allows a computer to communicate with peripheral and other devices. USB-connected devices cover a broad range; anything from keyboards and mice to music players and flash drives.
- [Lightning](https://www.computerhope.com/jargon/l/lightning.htm) — A proprietary type of connector designed by Apple, Inc. Introduced in September 2012, the rotationally symmetrical 8-pin Lightning connector provides power, and data at speeds of up to 500 Mbps, to select mobile and peripheral devices.
- [FireWire](https://www.computerhope.com/jargon/f/firewire.htm) — Alternatively called **IEEE-1394**, it is a digital [bus](https://www.computerhope.com/jargon/b/bus.htm) with a bandwidth of 400-800 Mbps and higher. It can handle up to 63 units on the same bus, is hot swappable, and supports [PnP](https://www.computerhope.com/jargon/p/pnp.htm) (plug and play) devices. It was first developed by Apple in 1995.
- [Thunderbolt](https://www.computerhope.com/jargon/t/thunderbolt.htm) — Originally marketed under the name **Light Peak**, it is an interface that is used to connect peripheral devices to a computer. It is a [serial](https://www.computerhope.com/jargon/s/serial.htm) interface that combines existing [PCI Express](https://www.computerhope.com/jargon/p/pciexpre.htm) and [DisplayPort](https://www.computerhope.com/jargon/d/displayport.htm) technologies. It allows for long distance data transfer over cheaper cables capable of carrying [DC](https://www.computerhope.com/jargon/d/dc.htm) power.
- [eSATA](#sata-device-cables) — Short for **Serial ATA** or **Serial AT Attachment**, **SATA** 1.0 was first released in August 2001 and is a replacement for the parallel ATA interface used in IBM compatible computers. **External SATA**, more commonly known as **eSATA**, offers many more advantages compared to other solutions such as being [hot-swappable](https://www.computerhope.com/jargon/h/hotswapp.htm) and up to six times faster transfer speeds with no bottleneck issues like USB and FireWire.

Before we had USB, we were using nine pin (DB-9) and 25 pin (DB-25) serial connections on our computers to be able to connect peripherals. These were commonly used to send [RS-232 signals](https://www.techtarget.com/searchnetworking/definition/RS-232C) which would allow us to send serial communication between our computer and other devices, such as a modem. This is commonly used these days to connect to serial consoles that might be on a peripheral device.

Older peripheral devices used one of the following types of cables and connections to connect to a computer:

- [Parallel port](https://www.computerhope.com/jargon/p/paraport.htm)
- [Serial port](https://www.computerhope.com/jargon/s/seriport.htm)
- [SCSI](#scsi-device-cables)

Some peripheral devices are designed to use a wireless connection to connect to a computer. The most common wireless protocols used by wireless peripheral devices are:

- [Bluetooth](/posts/mobile-devices-device-configuration/#bluetooth)
- [Wi-Fi](/posts/networking-wireless-protocols)

## Video cables

Video cables are used to connect displays to desktop and laptop PCs. There have been improvements in bandwidth and reductions in latency, and hosts of new features introduced. Where older cables could only transmit low-resolution analog video, more modern cables can transmit digital video and audio. Some can even handle power as well, while others let you do advanced [daisy-chaining of multiple monitors](https://www.cablematters.com/blog/DisplayPort/daisy-chain-monitors "CableMatters.com") on a single string of cables.

There are a number of factors that go into choosing the best monitor cable type to connect to your display with. You’ll be limited by the physical port options on your display and your source device, whether it’s a games console, desktop PC, a laptop, or something else entirely. There are also bandwidth limitations to consider, which can affect the maximum resolution and refresh rate that your monitor can run at, and additional features like HDMI’s ARC and eARC can be another factor to consider.

The most common monitor cable types you’ll come across are:

- [HDMI](https://www.computerhope.com/jargon/h/hdmi.htm) — Short for **High Definition Multimedia Interface**, is a connector and cable capable of transmitting high-quality and high-bandwidth streams of audio and video between devices.
- [DisplayPort](https://www.computerhope.com/jargon/d/displayport.htm) — Abbreviated as **DP**, is a digital audio and video interface created by [VESA](https://www.computerhope.com/jargon/v/vesa.htm). Its connections come in standard and the smaller **Mini DisplayPort**. Despite the difference in size, both connection types transmit identical signals.
- [DVI](https://www.computerhope.com/jargon/d/dvi.htm) — Short for **Digital Visual Interface**, is a video display interface. It was developed to be an industry standard for transmitting digital video content to display devices at resolutions as high as 2560 x 1600.
- [VGA](https://www.computerhope.com/jargon/v/vga.htm) — Short for **video graphics adapter** or **video graphics array**, is a popular display standard developed by IBM and introduced in 1987. VGA provides 640 x 480 resolution color display screens with a refresh rate of 60 Hz and 16 colors displayed at a time. If the resolution is lowered to 320 x 200, 256 colors are shown.

## SATA device cables

Short for **Serial ATA** or **Serial AT Attachment**, **SATA** 1.0 was first released in August 2001 and is a replacement for the parallel ATA interface used in IBM compatible computers. SerialATA can deliver 1.5 Gbps (approximately 187 MBps) of performance to each drive within a disk array. It is backward-compatible with ATA and ATAPI (AT Attachment Packet Interface) devices, and offers a thin, small cable solution, as seen in the "SATA Data Cable" picture. This cable helps makes cable routing easier and offers better airflow in the computer compared to the earlier ribbon cables used with ATA drives.

The SATA cable transfers data between a computer's motherboard and mass storage devices, such as [hard drives](https://www.computerhope.com/jargon/h/harddriv.htm) and [disc drives](https://www.computerhope.com/jargon/o/optidisc.htm). There are two types of SATA cables. The data cable that transmits the data between the drive and the [motherboard](https://www.computerhope.com/jargon/m/mothboar.htm) has seven pins. The power cable that connects to the [power supply](https://www.computerhope.com/jargon/p/power-supply.htm) has fifteen pins.

## SCSI device cables

Short for **small computer system interface**, **SCSI** is pronounced as _"**Scuzzy**"_ and is an interface for disk drives that was first completed in 1982. Unlike competing standards, SCSI can support eight devices, or sixteen devices with Wide SCSI. However, with the SCSI host adapter on ID number 07 and booting from the ID 00.

SCSI is a standard for parallel interfaces that transfers information at a rate of eight bits per second and faster, which is faster than the average parallel interface. Although SCSI was popular in the past, today it has largely been superseded by faster connection types, such as [SATA](#sata-device-cables).

## PATA device cables

Short for **Advanced Technology Attachment**, **ATA** was approved on May 12, 1994, and is an interface that connects hard drives, CD-ROM drives, and other drives. The first ATA interface is now commonly called PATA, which is short for Parallel AT Attachment.

As its name implies, PATA is based on [parallel signaling](https://www.techtarget.com/searchstorage/definition/parallel-I-O) technology, in which bits of data are sent simultaneously across multiple channels. PATA drives are no longer in widespread use in enterprise storage. They have been largely replaced by serial ATA ([SATA](#sata-device-cables)) devices that use serial signaling technology to transfer one [bit](https://www.techtarget.com/whatis/definition/bit-binary-digit) of data at a time across a single channel.
