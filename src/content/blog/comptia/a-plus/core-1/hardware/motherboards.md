---
title: Motherboards
description: The motherboard is the backbone that ties the computer's components together at one spot and allows them to talk to each other. Without it, none of the computer pieces, such as the CPU, GPU, or hard drive, could interact. Learn about what the motherboard does and the must-know for it to work well.
pubDatetime: 2023-10-06T04:23:48.651Z
postSlug: hardware-motherboards
tags:
  - comptia
  - a-plus
  - core-1
  - hardware
  - certification
  - studying
---

This post will cover various aspects of the **Hardware** section of the [CompTIA A+](https://www.comptia.org/certifications/a) Core 1 certification endeavor.

## Table of contents

## Overview

The fundamental physical component within all of our computers is the motherboard. The motherboard is a computer's central communications backbone connectivity point, through which all components and external peripherals connect.

Motherboards can be found in virtually all computers, especially desktop and laptop PCs. The components generally contains the CPU, connectivity to power, and additional slots for expanding the capabilities of the system.

## Form factors

There are different motherboards that have different sizes depending on the hardware's requirements. There’s usually a basic layout on motherboards regardless of the size, but the amount of expansion slots and the amount of additional memory slots will vary.

[There are dozens of different motherboard form factors](https://en.wikipedia.org/wiki/Motherboard_form_factor). For the CompTIA exam, there are two primary motherboard families you need to know: [the ATX family](https://en.wikipedia.org/wiki/ATX) and [the ITX family](https://en.wikipedia.org/wiki/Mini-ITX).

### ATX

Short for advanced technology extended, **ATX** is the motherboard that you’d most likely find in a desktop computer. It has a lot of real estate, plenty of expansion slots, lots of memory, and there’s plenty of room inside of a desktop for this size of motherboard.

First released in July 1995 by Intel, ATX has since had many revisions. The first was version 2.01 in February 1997, then 2.03 in May 2000, 2.1 in June 2002, and 2.2 in February 2004. If you’re buying a computer for a desktop today, you’re probably buying an ATX motherboard with a power connector that’s 20 or 24 pins in size, and there may be additional power on the motherboard for CPU.

### ITX

Short for Information Technology eXtended, **ITX** is a small motherboard form factor from VIA Technologies released in November 2001 with the Mini-ITX. With the compact configuration of ITX motherboards, they are used in low-cost small setups found in cars, network devices, set-top boxes, and other small computers.

Later versions of ITX include the Nano-ITX released in March 2003, the Mobile-ITX released in March 2004, and the Pico-ITX released in April 2007. An important feature of a variety of ITX motherboards are its low power consumption, using less than 25 watts of power, with some as few as five watts.

## Expansion slots

There are times when we might want to add additional functionality to our motherboard by adding an expansion card into one of the available slots. Alternatively known as a **bus slot** or **expansion port**, an **expansion slot** is a connection or port inside a computer on the motherboard or riser card. It provides an installation point for a hardware expansion card to be connected and communicate with the memory and the CPU.

### PCI

If you’re working with an older computer, you may see some expansion slots that are **PCI**, **Peripheral Component Interconnect**. Peripheral Component Interconnect is a common connection interface for attaching computer peripherals to the motherboard. PCI was popular between 1995 and 2005 and was most often used to connect sound cards, network cards, and video cards.

A PCI bus lets you change different peripherals that are attached to the computer system. Usually, there are three or four PCI slots on a motherboard. With PCI, you can unplug the component you want to swap and plug in the new one in the PCI slot. If you have an open slot, you can add another peripheral like a second hard drive.

Computers might have more than one type of bus to handle different traffic types. The PCI bus used to come in both 32-bit and 64-bit versions. PCI runs at 33 MHz or 66 MHz.

### PCIe

Modern computers mainly use other interface technologies like USB or [PCI Express](https://www.techtarget.com/searchdatacenter/definition/PCI-Express) (PCIe). Some desktop computers might have PCI slots on the motherboard to maintain backward compatibility. However, the devices that were attached as PCI expansion cards are now either integrated onto motherboards or attached by other connectors like PCIe.

With PCIe, data is transferred over two signal pairs: two wires for transmitting and two wires for receiving. Each set of signal pairs is called a "lane," and each lane is capable of sending and receiving eight-bit data packets simultaneously between two points.

PCIe can scale from **one to 32 separate lanes**; it is usually deployed with 1, 4, 8, 12, 16 or 32 lanes. The lane count of a PCIe card is a determining factor in its performance and therefore in its price. PCIe provides lower latency and higher data transfer rates than parallel busses such as PCI and PCI-X. Every device that's connected to a motherboard with a PCIe link has its own dedicated point-to-point connection. This means that devices are not competing for bandwidth because they are not sharing the same bus.

## Connectors

The motherboard connections go to the CPU, RAM, ROM, expansion slots, PCI slots, USB ports, and power. There are also motherboard connectors/controllers for devices such as the hard drive, mouse, and keyboard.

All motherboards have **front panel connectors**, sometimes called **headers** or **pin headers**, that a PC case connects to. Front Panel Connectors connect the PC Case’s Power Switch, Reset Switch, and LED indicators to the motherboard.

There are five primary functions that almost all front panel headers have:

1. **Power Switch Pins** — Abbreviated as PWRSW or simply PW, these are two pins connecting to the Power Button cable from the PC case.
2. **Reset Switch Pins** — These are two pins connecting to the PC case’s reset switch.
3. **Power LED Pins** — These are three pins that connect to the LED light on the PC case, indicating whether the PC is on, off, or in sleep mode.
4. **Hard Disk LED Pins** — These are two pins that indicate the activity of the hard disk by flashing repeatedly.
5. **Speaker Pins** — There are four pins for the beep code speaker. Many PC Cases come with a **beep code speaker**. _Note that a beep code speaker is NOT the same as a stereo speaker._

### Power

A computer is composed of several electronic components that require power, with each part needing different voltages to work correctly. So, you need a power supply to deliver all these different power requirements.

A **power supply unit** or **PSU**, is specifically designed for desktop computers to supply appropriate voltages for each PC component, such as CPU, GPU, motherboard, and storage drives. It does so by providing several power connectors with varying numbers of pins which can sometimes be split to support different motherboards and CPUs.

**This table illustrates the most common PSU power connectors, including their names, function, and power specifications**:

| Connector                        | Function                              | Voltage(s)           | Wattage |
| -------------------------------- | ------------------------------------- | -------------------- | ------- |
| 24-pin (20+4 pin) ATX main power | Supplies power to the motherboard     | +3.3V, +5V, and +12V | 300W    |
| 4-pin ATX 12V power              | Supplies power to the low-powered CPU | +12V                 | 120W    |
| 8-pin (4+4 pin) EPS12V           | Supplies Extra Power to the CPU       | +12V                 | 336W    |
| 8-pin (6+2 pin) PCIe power       | Supplies power to graphics cards      | +12V                 | 150W    |
| SATA power connector             | Supplies power to SATA drives         | +5V, +12V            | 54W     |
| Molex power connector            | Supplies power to older IDE drives    | +5V, +12V            | 132W    |

Before connecting the power supply to the motherboard, make sure all power sources are disconnected and then connect that directly into the motherboard with the orientation that matches the keys on the individual pins.

### Memory

Storage devices such as hard disk drives and solid state drives connect to the motherboard via SATA. There may be situations where you don’t have any room to install a new drive inside of your computer case or perhaps you have an external drive that you would like to use.

In those cases, you might want to use an eSATA connection for external Serial ATA. That external connection is usually provided with a built-in interface on the motherboard. This allows us to connect an external storage device, but we still have the same throughput and performance as an internal SATA connection.

You might also find on your motherboard an M.2 connector. This is on newer motherboards that can support connectivity using this M.2 standard. One very common use of these M.2 connectors is to plug in an SSD and be able to have all of your storage on this very small device connected to the motherboard.

## The BIOS

When starting a computer, something has to begin the process of loading an operating system. The software that starts up on most personal computers is the [**BIOS**, the Basic Input Output System](https://www.techtarget.com/whatis/definition/BIOS-basic-input-output-system).

BIOS comes included with computers, as [firmware](https://www.techtarget.com/whatis/definition/firmware) on a chip on the motherboard. In contrast, an OS like Windows or iOS can either be pre-installed by the manufacturer or vendor or installed by the user. BIOS is a program that is made accessible to the microprocessor on an erasable programmable read-only memory (EPROM) chip. When users turn on their computer, the microprocessor passes control to the BIOS program, which is always located at the same place on EPROM.

The main use of BIOS is to act as a middleman between OSes and the hardware they run on. BIOS is theoretically always the intermediary between the [microprocessor](https://www.techtarget.com/whatis/definition/microprocessor-logic-chip) and the [computer systems](https://www.techtarget.com/searchwindowsserver/definition/system) I/O device control information and data flow. Although, in some cases, BIOS can arrange for data to flow directly to memory from devices, such as video cards, that require faster data flow to be effective.

When BIOS boots up a computer, it first determines whether all of the necessary attachments are in place and operational. Any piece of hardware containing files the computer needs to start is called a _boot device_. After testing and ensuring boot devices are functioning, BIOS loads the OS -- or key parts of it -- into the computer's RAM from a hard disk or diskette drive (the boot device). The combination of these steps is called the _boot process_.

These tasks are each carried out by BIOS' four main functions:

1. **Power-on self-test ([POST](https://www.techtarget.com/whatis/definition/POST-Power-On-Self-Test)**) — This tests the hardware of the computer before loading the OS.
2. **[Bootstrap loader](https://www.techtarget.com/searchdatacenter/definition/boot-loader-boot-manager)** — This locates the OS.
3. **Software/drivers** — This locates the software and drivers that interface with the OS once running.
4. **Complementary metal-oxide semiconductor ([CMOS](https://www.techtarget.com/whatis/definition/CMOS-complementary-metal-oxide-semiconductor)) setup** — This is a configuration program that enable users to alter hardware and system settings. CMOS is the name of BIOS' non-volatile memory.

If you’re working with an older computer, you might have a text-based BIOS that is considered legacy BIOS. Most older operating systems were able to interact with the hardware using this legacy BIOS. We can make very basic configuration changes from this legacy BIOS, but there’s no way to change or upgrade the capabilities of this BIOS. There’s no way to add additional drivers to connect different network interfaces, and there’s no way to somehow interact or add on to the capabilities of the BIOS itself.

The BIOS that is in most modern computers is called a **Unified Extensible Firmware Interface** ([UEFI](https://www.techtarget.com/whatis/definition/Unified-Extensible-Firmware-Interface-UEFI)). It is a standard form of BIOS that can be used across multiple manufacturers. It was created by Intel called the EFI standard or the Extensible Firmware Interface standard. Intel announced a plan in 2017 to retire support for legacy BIOS systems by 2020, replacing them with UEFI.

## CPU features

Most computers made in the 1990s and early 2000s were **32-bit** machines. The CPU register stores memory addresses, which is how the processor accesses data from the RAM. One bit in the register can reference an individual byte in memory, so a [x86 system](https://www.geeksforgeeks.org/explain-why-windows-32-bit-called-windows-x86-and-not-windows-x32/) can address a maximum of 4 GB (4,294,967,296 bytes) of RAM.

A **64-bit** register can theoretically reference `18,446,744,073,709,551,616` bytes, or `17,179,869,184` GB (_16 exabytes_) of memory. This is several million times more than an average workstation would need to access. What’s important is that a 64-bit computer (which means it has a 64-bit processor) can access more than 4 GB of RAM. If a computer has 8 GB of RAM, it better has a 64-bit processor. Otherwise, at least 4 GB of the memory will be inaccessible by the CPU.

**This table illustrates the difference between 32-bit and 64-bit processors**:

| Feature             | 32-bit OS                                             | 64-bit OS                                                          |
| ------------------- | ----------------------------------------------------- | ------------------------------------------------------------------ |
| Memory              | Maximum of 4 GB RAM                                   | Maximum of several terabytes of RAM                                |
| Processor           | Can run on both 32-bit and 64-bit processors          | Requires a 64-bit processor                                        |
| Performance         | Limited by the maximum amount of RAM it can access    | Can take advantage of more memory, enabling faster performance     |
| Compatibility       | Can run 32-bit and 16-bit applications                | Can run 32-bit and 64-bit applications                             |
| Address Space       | Uses 32-bit address space                             | Uses 64-bit address space                                          |
| Hardware support    | May not support newer hardware                        | Supports newer hardware with 64-bit drivers                        |
| Security            | Limited security features                             | More advanced security features, such as hardware-level protection |
| Application support | Limited support for new software                      | Supports newer software designed for 64-bit architecture           |
| Price               | Less expensive                                        | More expensive                                                     |
| Multitasking        | Can handle multiple tasks but with limited efficiency | Can handle multiple tasks more efficiently                         |
| Virtualization      | Limited support for virtualization                    | Better support for virtualization                                  |

There’s another family of operating systems called the **Advanced [RISC](https://www.geeksforgeeks.org/computer-organization-risc-and-cisc/) Machine**, or ARM. This is an architecture that was developed by ARM Limited. They designed the specifications for the hardware, and then third parties use those specifications to create ARM-based CPUs. The ARM architecture is well known for being extremely efficient and fast in its processing. It uses less power, creates less heat, and it’s perfect for our mobile devices. Although we commonly see ARM used for mobile devices and IOT, the capabilities of ARM-based architectures are greatly expanding, challenging the traditional 64-bit operating systems.

### CPU cores

A processor (CPU) is the logic circuitry that responds to and processes the basic instructions that drive a computer. The CPU is seen as the main and most crucial integrated circuitry (IC) chip in a computer, as it is responsible for interpreting most of computers commands. CPUs will perform most basic arithmetic, logic and I/O operations, as well as allocate commands for other chips and components running in a computer.

The term *processor* is used interchangeably with the term CPU. Although strictly speaking, the CPU is not the only processor in a computer. The GPU is the most notable example, but the hard drive and other devices within a computer also perform some processing independently. Nevertheless, the term *processor* is generally understood to mean the CPU.

A **core**, or **CPU core**, is the "brain" of a [CPU](https://www.computerhope.com/jargon/c/cpu.htm) (central processing unit). It receives [instructions](https://www.computerhope.com/jargon/c/compinst.htm) and performs calculations or operations to satisfy those instructions. A CPU can have multiple cores. A processor with two cores is called a [dual-core](https://www.computerhope.com/jargon/d/dualcore.htm) processor; with four cores, a [quad-core](https://www.computerhope.com/jargon/q/quad-core.htm); six cores, [hexa-core](https://www.computerhope.com/jargon/h/hexa-core.htm); eight cores, octa-core. As of 2019, most consumer CPUs feature between two and twelve cores. Multiple cores may also work together to perform [parallel](https://www.computerhope.com/jargon/p/parallel.htm) operations on a shared set of data in the CPU's memory [cache](https://www.computerhope.com/jargon/c/cache.htm).

In reality, we’re not getting twice the amount of work from one single device. Instead, it simply increases the throughput of the processes going through the CPU by somewhere around 15% to 30%. Not only do you need a CPU that supports hyper-threading, but your operating system also has to support it as well. Today any modern operating system supports [hyper-threading](https://www.computerhope.com/jargon/h/hyperthr.htm).

## Expansion cards

One of the nice parts about modern computing platforms is that we’re able to extend those capabilities by adding additional hardware to our systems. One of the primary ways of adding this hardware is through the use of expansion cards, adding to the capabilities of that system.

This allows you as the end user to purchase any available and compatible products and install them yourself in your own system. This might be just hardware, where you purchase a card and install that card into your system, or it might also involve the process of installing a hardware driver that integrates this new hardware to the operating system that you’re running on that computer.

Installing the expansion card is relatively straightforward. Remove the top of a case, find an available expansion slot, and place the card into that empty slot. As you gently push a card into place, make sure that the holes, or the keys, that are in the card match the keys that are part of the expansion slot. Now you have a card that’s ready to be used by your system.

## Cooling

One of the biggest challenges when maintaining the operation of our computer is making sure that it remains cool. Computers create a lot of heat, so we need a way to maintain a good temperature inside of our computer case. One very common way to provide this cooling is through the use of cool air. We’ll pull cool air through the front of the system, pass by the hot components where the air gets warmer, and eventually, push the warm air out the back of the system.

Exactly where the air is brought from and where the air goes depends on the case and the style of the motherboard. We also have to take into account the layout of the system inside, especially if there’s lots of cables or adapter cards, because that will affect the flow of the air. Fortunately, there are a lot of options for cooling a system. You can use multiple fans or different sized fans, and you may be able to move some components around within your system to improve the overall airflow.

Some adapter cards in your computer may already have a fan directly connected to the adapter card. It adds a bit of bulk and size to the card itself, so you have to make sure that you have enough space inside of your computer so that fan can freely spin. This is very often seen on high-end cards, like video cards, or any other type of adapter card that has a lot of processing power and tends to get very hot.

Some computer systems have no fans at all. They are completely silent, and all of the cooling is done passively. This means there’s no fans or other type of cooling systems inside of this device. This is very common on systems that are very small, where you either can’t fit a fan inside of that case or adding a fan would add so much noise that you would not be able to use that system.

A heat sink is a specially designed piece of metal. This is usually copper or aluminum alloy, and it usually has a very specific shape that allows it to take heat from a particular component and dissipate that heat as air is passing by the heat sink. Although there is cool air helping to cool this heat sink, it can still get extremely warm to the touch. So be very careful when you’re working on a system, especially one that you’ve recently turned off, because that heat sink could be very hot.

An important characteristic of the heat sink is that it’s able to receive all of the heat from this component, like the CPU we see here, and is able to receive as much heat as possible so that it can then dissipate that heat in the cooler air. To be able to make an efficient thermal connection between the component itself and the heat sink, we need to use thermal paste. You’ll sometimes hear thermal paste referred to as “thermal grease” or “conductive grease,” but it’s all effectively the same material. This is what you’ll put in between the heat sink and that very warm component.

That will create a very good bond between those two, and it will be able to easily take the heat away from the component and dissipate that into the cooler air. It doesn’t take a lot of thermal paste to be able to make this connection. We often refer to this as being a “pea-sized amount of thermal paste” to be able to protect something like a CPU. Here’s a good example of this. This is a CPU that has just been installed, and you can see a pea-sized amount of thermal paste is being placed on the middle of the CPU. When you add the heat sink to the top of this, it will spread that out evenly throughout the CPU, making for an evenly distributed thermal connection.

There are times, though, that the thermal paste is a little bit too messy to be able to work inside of a computer system. In that case, you might want to use a thermal pad. This allows you to still maintain a good thermal connection between the component and the heat sink, but you can cut it exactly to the size you need when you’re installing it. This is obviously not going to leak or damage any other components on your motherboard, because it’s a solid pad. And although this is not as 100% effective as thermal paste, it’s still quite good and is a very good replacement for thermal paste in most situations.

If there is a drawback to the thermal pad, it’s that you have to replace it each time you would remove and replace the heat sink. If you’re using thermal paste, you can remove the heat sink, make adjustments, and put the heat sink back down again without having to replace all of that thermal paste. But if you’re using a thermal pad, you have to replace that pad each time you remove the heat sink. You can’t reuse a thermal pad once you’ve put the heat sink and fastened everything down.

This ensures that the heat sink will receive a direct supply of cooler air to help cool that down even more effectively. And in some cases, you can find very large heat sinks with very large fans connected to them. The large heat sinks ensure that you have a lot of surface area to be able to dissipate that heat, and the large fans allow you to move a lot of air without a lot of noise.

Instead of using air to cool your system, you might want to use liquid. This is the same type of cooling you might see in something like an automobile or a mainframe computer, where you’re using cool liquid, very often cool water, to be able to bring the temperature down of these components. This is something you might commonly see on higher-end systems that need a very effective form of cooling, especially if you’re doing some type of gaming or graphics work or maybe you’re overclocking a system and therefore creating more heat than what you might usually expect from that system.
