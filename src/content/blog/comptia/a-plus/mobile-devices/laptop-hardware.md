---
title: Laptop Hardware
description:
  Learn about laptop hardware, storage options, and an overview of converting from traditional hard drives to high-speed
  SSD technology.
pubDatetime: 2023-08-02T06:36:17.783Z
postSlug: mobile-devices-laptop-hardware
tags:
  - comptia
  - a-plus
  - core-1
  - mobile-devices
  - certification
  - studying
---

This post will cover various aspects of the **Mobile Devices** section of the
[CompTIA A+](https://www.comptia.org/certifications/a) Core 1 certification endeavor. This includes laptop hardware,
laptop displays, mobile device configuration, and mobile device connectivity.

## Table of contents

## Batteries

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

### Nickel Cadmium (Ni-Cd)

Nickel Cadmium (Ni-Cd) batteries were the standard technology for years, but today they are out of date and new laptops
don't use them anymore. They are heavy and very prone to the _memory effect_. When recharging a Ni-Cd battery that has
not been fully discharged, it _remembers_ the old charge and continues there the next time you use it. The memory effect
is caused by crystallization of the battery's substances and can permanently reduce your battery's lifetime, even make
it useless. To avoid it, completely discharge the battery and then fully recharge it again at least once every few
weeks. This battery contains cadmium, a toxic material, and it should always be recycled or disposed of properly.

### Nickel Metal Hydride (Ni-MH)

Nickel Metal Hydride (Ni-MH) batteries are the cadmium-free replacement for Ni-Cd. They are less affected by the _memory
effect_ than Ni-Cd and thus require less maintenance and conditioning. However, they have problems at very high or low
room temperatures. Even though they use less hazardous materials (they do not contain heavy metals), they cannot be
fully recycled yet. **The capacity of a Ni-MH battery is approximately twice the capacity of a Ni-Cd battery**. This
means increased run-time from the battery with no additional bulk or weight.

### Lithium Ion (Li-ion)

Lithium Ion (Li-ion) are the new standard for portable power. Li-ion batteries produce the same energy as Ni-MH, but
weighs 20%-35% less. They do not suffer significantly from the _memory effect_ unlike Ni-MH and Ni-Cd batteries. They
are a non-hazardous material, but ignite very easily. Unfortunately, few consumer recycling programs have been
established for Li-ion batteries.

## Keyboards

Keyboards are one of the most used components of a laptop. It is our primary input into the operating system. It’s a
very easy, yet fragile component to replace. The reason for this is because it’s usually connected to the laptop's
motherboard with a single ribbon cable. If you are finding it difficult to troubleshoot a laptop keyboard, you do have
the option to plug an external keyboard to a USB interface.

A keyboard challenge we may encounter is with smaller laptops there’s less space to have a keyboard. This would require
changing around the layout and function of the keyboard just to be able to fit into a small place. Another challenge can
be damages and replacements of keycaps. Keycaps are very fragile, so be cautious when replacing them or the keyboard
itself.

## RAM

**Every execution program in a laptop's operating system requires memory**. If we ever need to increase the amount of
memory in our laptop, then we’ll probably need to exchange the
[dual in-line memory module (DIMM)](https://www.techtarget.com/searchstorage/definition/DIMM). DIMM is a module that
contains one or several random access memory
([RAM](https://www.techtarget.com/searchstorage/definition/RAM-random-access-memory)) chips on a small circuit board
with pins that connect it to the computer motherboard. The DIMM stores each data bit in a separate memory cell. DIMMs
use a 64-bit data path, since processors used in personal computers have a 64-bit data width.

There are a variety of DIMMs, but the most common standard DIMMs, with a typical length of 5.5 inches and height of 1.18
inches, are:

### Unbuffered DIMMs (UDIMMs)

Used mainly on desktop and laptop computers. Although they run faster and cost less, UDIMMs aren’t as stable as
registered memory. Commands go directly from the memory controller residing in the CPU to the memory module.

### Fully-buffered DIMMs (FB-DIMMs)

Usually used as main memory in systems that require large capacities, such as servers and workstations. FB-DIMMs use
advanced memory buffer (AMB) chips to boost reliability, maintain signal integrity and improve methods to detect errors
to reduce [soft errors](https://www.techtarget.com/whatis/definition/soft-error). The AMB bus is split into a 14-bit
read bus and a 10-bit write bus. Having a dedicated read/write bus means reads and writes can happen at the same, which
results in increased performance.

### Registered DIMMs (RDIMMs)

Also known as buffered memory, RDIMMs are often used in servers and other applications that require robustness and
stability. RDIMMs feature onboard memory registers that are placed between the memory and the memory controller. The
memory controller buffers command, addressing and clock cycling, and directs instructions to the dedicated memory
registers rather than directly accessing the DRAM. Consequently, the instructions could take about one CPU cycle longer.
However, the buffering reduces the strain on the CPU's memory controller.

### Load-reduced DIMMs (LR-DIMMs)

Use isolation memory buffer (iMB) technology that buffers the data and address lanes, reducing the load on the memory
controller. The iMB chip also buffers data signals, unlike the register on RDIMMs, which only buffers command,
addressing and clock cycling. The iMB chip isolates all electrical loading, including data signals of the DRAM chips on
the DIMM from the memory controller. As a result, the memory controller only sees the iMB and not the DRAM chips. The
memory buffer then handles all the reads and writes to the DRAM chips, enhancing capacity and speed.

### SO-DIMM

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

## Disk Drives

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
