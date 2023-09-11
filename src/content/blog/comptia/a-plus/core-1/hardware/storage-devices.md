---
title: Storage Devices
description: We rely on our storage devices for access to our most important documents. Learn about the many ways to store and access files on our computing devices.
pubDatetime: 2023-09-07T14:44:58.205Z
postSlug: hardware-storage-devices
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

This post will cover various aspects of the **Hardware** section of the [CompTIA A+](https://www.comptia.org/certifications/a) Core 1 certification endeavor.

## Table of contents

## Overview

Data storage is the collective methods and technologies that capture and retain digital information on electromagnetic, optical or silicon-based storage media. Storage is used in offices, data centers, edge environments, remote locations and people's homes. Storage is also an important component in mobile devices such as smartphones and tablets. Consumers and businesses rely on storage to preserve information ranging from personal photos to business-critical data.

The term storage can refer to both the stored data and to the integrated hardware and software systems used to capture, manage, secure and prioritize that data. The data might come from applications, databases, data warehouses, archives, backups, mobile devices or other sources, and it might be stored on premises, in edge computing environments, at colocation facilities, on cloud platforms or any combination of these.

Storage is frequently used to describe devices that connect to a computer either directly or over a network, and that support the transfer of data through input/output (I/O) operations. Storage devices can include hard disk drives (HDDs), flash-based solid-state drives (SSDs), optical disc drives, tape systems and other media types.

### Hard disk drive (HDD)

A computer hard disk drive (HDD) is a non-volatile data storage device. Non-volatile refers to storage devices that maintain stored data when turned off. That means that we could power on our system and access any bit of data without having to forward or rewind information like you might with a tape drive.

They can store operating systems, software programs and other files using magnetic disks. More specifically, hard disk drives control the reading and writing of the hard disk that provides data storage. We refer to access on a hard disk drive as `random access`.

HDDs are used either as the primary or secondary storage device in a computer. They are commonly found in the drive bay and are connected to the motherboard via an Advanced Technology Attachment (ATA), [Serial ATA](/posts/hardware-cables-and-adapters/#sata-device-cables), [Parallel ATA](/posts/hardware-cables-and-adapters/#pata-device-cables) or [Small Computer System Interface (SCSI) cable](/posts/hardware-cables-and-adapters/#scsi-device-cables), among other formats. The HDD is also connected to a power supply unit and can keep stored data while powered down.

Most basic hard drives consist of several disk platters, a circular disk made of either aluminum, glass or ceramic, that are positioned around a spindle inside a sealed chamber. The platter spins with a motor that is connected to the spindle. The chamber also includes the read/write heads that magnetically record information to and from tracks on the platters using a magnetic head. The disks also have a thin magnetic coating on them.

The motor spins the platters at up to 15,000 rotations per minute. As the platters spin, a second motor controls the position of the read and write heads that magnetically record and read information on each platter.

Hard disk drive components include the spindle, disk platter, actuator, actuator arm and read/write head. Even though the term can refer to the unit as a whole, the term _hard disk_ is the set of stacked disks, in other words, the part of the HDD that stores and provides access to data on an electromagnetically charged surface.

The HDD form factor refers to the physical size or geometry of the data storage device. HDD form factors follow a set of industry standards that govern their length, width and height, as well as the position and orientation of the host interface connector. Having an industry-standard form factor helps determine a common compatibility with different computing devices.

The most common form factors for HDDs in enterprise systems are 2.5-inch and 3.5-inch -- also known as small form factor (SFF) and large form factor (LFF). The 2.5-inch and 3.5-inch measurements represent the approximate diameter of the platter within the drive enclosures.

While there are other form factors, by 2009, manufacturers discontinued the development of products with 1.3-inch, 1-inch and 0.85-inch form factors. The falling price of flash made these other form factors almost obsolete. It is also important to note that while nominal sizes are in inches, actual dimensions are specified in millimeters.

### Solid state drive (SSD)

An SSD, or solid-state drive, is a type of storage device used in computers. This non-volatile storage media stores persistent data on solid-state flash memory. SSDs replace traditional hard disk drives (HDDs) in computers and perform the same basic functions as a hard drive. But SSDs are significantly faster in comparison. With an SSD, the device's operating system will boot up more rapidly, programs will load quicker and files can be saved faster.

A traditional hard drive consists of a spinning disk with a read/write head on a mechanical arm called an actuator. An HDD reads and writes data magnetically. The magnetic properties, however, can lead to mechanical breakdowns.

By comparison, an SSD has no moving parts to break or spin up or down. The two key components in an SSD are the flash controller and NAND flash memory chips. This configuration is optimized to deliver high read/write performance for sequential and random data requests.

SSD manufacturers offer diverse form factors. The most common form factor is a 2.5-inch SSD that is available in multiple heights and supports SAS, SATA and NVMe protocols.

Types of SSDs include:

1. **Solid-state drives.** Basic SSDs deliver the least performance. SSDs are flash devices that connect via Serial Advanced Technology Attachment (SATA) or serial-attached SCSI (SAS) and provide a cost-effective first step into the solid-state world. For many environments, the performance boost in sequential read speeds from a SATA or SAS SSD will suffice.
2. **PCIe-based flash. Peripheral Component Interconnect Express**-based flash is the next step up in performance. While these devices typically offer greater throughput and more input/output operations per second, the biggest advantage is significantly lower latency. The downside is that most of these offerings require a custom driver and have limited built-in data protection.
3. **Flash DIMMs.** Flash dual in-line memory modules reduce latency, going further than PCIe flash cards by eliminating the potential PCIe bus contention. They require custom drivers unique to flash DIMMS, with specific changes to the read-only I/O system on the motherboard.
4. **NVMe SSDs.** These SSDs use the non-volatile memory express ([NVMe](https://www.techtarget.com/searchstorage/definition/NVMe-non-volatile-memory-express)) interface specification. This accelerates data transfer speeds between client systems and solid-state drives over a PCIe bus. NVMe SSDs are designed for high-performance non-volatile storage and are well-suited for highly demanding, compute-intensive settings.
5. **NVMe-oF.** The [NVMe over Fabrics](https://www.techtarget.com/searchstorage/definition/NVMe-over-Fabrics-Nonvolatile-Memory-Express-over-Fabrics) protocol enables data transfers between a host computer and a target solid-state storage device. NVMe-oF transfers data through methods such as Ethernet, Fibre Channel or InfiniBand.
6. **Hybrid DRAM-flash storage.** This dynamic random access memory ([DRAM](https://www.techtarget.com/searchstorage/definition/DRAM)) channel configuration combines flash and server DRAM. These hybrid flash storage devices address the theoretical scaling limit of DRAM and are used to increase throughput between application software and storage.

Two newer form factors worth noting are M.2 and U.2 SSDs. An M.2 SSD varies in length -- typically from 42 millimeters (mm) to 110 mm -- and attaches directly to a motherboard. It communicates via NVMe or SATA. The small size of an M.2 limits the surface area for heat dissipation which, over time, will reduce its performance and stability. In enterprise storage, M.2 SSDs often are used as a boot device. In consumer devices, such as notebook computers, an M.2 SSD provides capacity expansion.

A U.2 SSD describes a 2.5-inch PCIe SSD. These small form-factor devices were formerly known as SFF-8639. The U.2 interface enables high-speed NVMe-based PCIe SSDs to be inserted in a computer's circuit board, without the need to power down the server and storage.

### Flash memory

Another type of storage that we use extensively on our laptops and desktop computers is flash memory. Technically, this is an EEPROM, which is an electrically erasable programmable read-only memory. This is also a non-volatile form of storage, so you can remove the flash drive from your system. There’s no power going to the flash drive, yet it’s able to retain all of the data we’ve stored in that flash memory.

One concern with flash memory is that it does have a limit to the number of times you can write information to that drive. Once you hit that threshold, you’re able to read the information that is on that flash drive, but you would not be able to rewrite or change any of that information in the future.

It’s also not recommended to use flash drives as archival storage. These are very small storage devices, and they can be easily lost or damaged. It’s always good to have a backup of all of your data, but especially data that you’re storing on a flash drive.

Here are some very common examples of flash memory. Your USB flash drive that you’re probably familiar with is up here in the upper left. And if you have a camera or some other mobile device, you may also be using an SD type of flash memory. If you have a mobile phone or a very small device, it might use a very small version of the SD called a microSD. And for older systems, you may find some legacy flash drives, such as the compact flash or the xD picture card.

Another type of storage that is becoming increasingly difficult to find on our systems is an optical drive. This is a storage type that uses a laser to either read small pits or different colors that are on this individual optical disk. This is a very common type of storage to use for archival media, especially if it’s a media type that you would not want to change once it’s been written.

There are many different formats of optical drives. But some of the most popular are CD-ROMs, DVD-ROMs, or Blu-ray. And you’ll find optical drives as an option available for internal laptop or desktop use. And there are also external drives that can connect via USB to those systems as well.

## RAID

It’s not uncommon to use hard drives to store large amounts of information. Terabytes upon terabytes of your data can be stored on the single spinning drive. And of course, because there are moving parts inside of these drives, they will eventually fail. Fortunately, there are things you can do so that when a drive fails, your data will always remain available. And in this video, we’ll look at how RAID arrays can be configured to provide this type of data redundancy.

As we go through this video, it may seem that RAID would be a very good way to backup your data. But the data in a RAID array is not a copy of your data. It is the data that you are actively retrieving or storing. And because of that, you have to keep in mind that RAID is not a method of backup. It’s simply a way to maintain uptime and availability if one of those drives happens to fail.

The term RAID is an acronym for Redundant Array of independent Disks. Earlier versions of this acronym used the word Inexpensive Disks instead of Independent, but it’s effectively the same idea. We can use multiple storage drives in a system that work together to maintain this uptime and availability. There are different types of RAID. We refer to these different types as different RAID levels. And although the name is Redundant Array of Independent Disks, there are some RAID levels that do not provide redundancy. So you have to be very careful when you’re initially setting up your RAID array that you’re choosing the right RAID level.

Let’s step through each one of these RAID levels to see how they might be used. And we’ll start with RAID 0 or striping. We refer to this as striping because we have at least two drives in a RAID 0 array. And instead of writing everything to one drive or everything to the other drive, we take all of our data and we split it evenly between these two drives.

So let’s take the example of a file that exists on eight different blocks. And we have a disk 0 and a disk one. That single file will be split evenly between these two disks. So block one is on disk 0. Block 2 is on disk 1. Block 3 is back to disk 0. Block 4 is on disk 1. So you can see that distributing this across multiple drives provides a performance increase because we only have to write or read half of the data if we have two separate drives.

But one of the problems with this is that if we lose one of these drives, none of this data will now be available because you’ve effectively lost half of the data that you’ve stored. You should always think that RAID 0 is the same as having 0 redundancy.

RAID 1 looks very similar to RAID 0 in its structure. You can see there is a disk 0 and a disk 1. But with RAID 1, we are duplicating data between both of these drives. So each drive effectively is a mirror image of the other. That’s why we refer to RAID 1 as mirroring. You can obviously see in this scenario that we are using twice as much drive space than we would use with RAID 0.

Because we are duplicating every single drive, we will effectively need twice as much storage to be able to store this same amount of information. But on the plus side, if we lose either of these physical disks, our data remains available because we have an exact duplicate of the data on the other disk. It’s not uncommon when working with a RAID array that you would lose a drive and not even realize it until you receive an alert or message that the drive is failed.

Instead of duplicating every bit of data that you’re storing on these drives, there is a more efficient method. That method is RAID 5, which we call striping with parity. This is the same as RAID 0, where we take all of the information that we’re storing and we put pieces of that data across different drives. But unlike RAID 0, which of course, has 0 redundancy we have an additional drive where we store some parity information. That parity information allows us to rebuild this data if we happen to lose any of these physical drives.

This is a much more efficient use of drive space because you have all of the data being spread across drives and then on one additional drive some parity information. So if you’re storing this on four separate drives, three of those drives can be used for data and one of those drives can be used for parity. As you can see from our example, we also distribute the parity to different drives, which helps during the recovery process. And that recovery process is important when a single drive fails in that RAID 5 array.

It may seem that losing a single drive will also cause some of our data to be lost. And although that’s true, we’re able to rebuild this data in real time by taking advantage of the parity information that we stored separately. Having to recalculate this data in real time based on the parity that’s left over could cause a performance hit because there are CPU cycles required to do that. But with the proper processing on the RAID controller or the proper CPU inside of your system, you may not even see that a performance issue is occurring.

And the last RAID type we’ll look at is RAID 10. Some people refer to this as RAID 1 plus 0 or a stripe of mirrors. Let’s go back to that original RAID 0 configuration. And in this example, we have RAID 0 with three separate physical drives. And you can see that we are evenly distributing our files across all three of those individual drives. As with RAID 0, if we lose any one of these physical drives, then all of our data is inaccessible.

So with RAID 1 plus 0, we add on the RAID 1 part or the mirroring aspect and we start mirroring all of our RAID 0 arrays. So now we’re still storing three separate stripes of data, but instead of only having one copy of that stripe, we are mirroring each of those stripes of data. That way if we lose any one of these drives, we’re still up and running because we have an exact duplicate of that stripe. And in our example, we could even lose three separate drives and still have access to all of our data as long as the three drives that we’re losing are part of the single pairs in each individual RAID 1 mirror.
