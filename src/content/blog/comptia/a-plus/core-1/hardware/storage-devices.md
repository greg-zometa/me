---
title: Storage Devices
description:
  We rely on our storage devices for access to our most important documents. Learn about the many ways to store and
  access files on our computing devices.
pubDatetime: 2023-09-06T13:11:44.077Z
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

This post will cover various aspects of the **Hardware** section of the
[CompTIA A+](https://www.comptia.org/certifications/a) Core 1 certification endeavor.

## Table of contents

## Overview

One way to store a lot of information on our computing devices is through the use of a hard drive. A hard drive consists
of spinning magnetic platters. And even when your system is powered off, it still retains the data that you’ve stored on
that hard drive.

Because of that, you often hear hard drives referred to as “non-volatile” because the information continues to be on
that drive even when there’s no power to the system. That means that we could power on our system and access any bit of
data that may be on this hard drive. We don’t have to forward or rewind information like you might with a tape drive.
And that’s why we refer to access on a hard drive as “random access.”

Inside the drive itself are a lot of moving parts. You’ve got platters that are constantly spinning. You’ve got actuator
arms that are moving back and forth to find the data that’s on this drive. And all of these mechanical components create
limitations on how quickly we can retrieve and store data on this storage device.

Another concern is that any time there’s moving parts, these moving parts will eventually break. And so we know that a
hard drive will eventually fail. The question is exactly when that failure might occur.

Here’s the view inside of a hard drive. All of the data is stored on these platters that are spinning at very high rates
of speed. That platter is rotating around a spindle that’s in the middle of the platters. And an actuator on the hard
drive controls an arm that moves back and forth over these platters to be able to store or retrieve data.

There’s a small head at the end of the arm that is used to very precisely locate, retrieve, and write data to the
spinning platters. These platters can spin at different speeds. And the faster they spin, the faster you’ll be able to
retrieve the data.

For example, a common rotational speed for a low-end hard drive is 5,400 rotations per minute. And that gives you a
rotational latency of about 5 and 1/2 milliseconds. This means as the platter is spinning around, we have to wait for
the data to eventually make its way back to the head so that you can either read or write that data.

If the drive is spinning faster, for example, at 15,000 rotations per minute, then the rotational latency lowers to
about 2 milliseconds. So the faster you spin this drive, the faster you’ll be able to read or write the data that’s on
that drive.

Here’s a better view from the side. You can see there’s not just a single platter, there are multiple platters. And
indeed, there are multiple heads connected to both the top and the bottom of every platter. This allows you to read and
write data from every single available spot on these spinning platters.

You may find different sizes for storage devices on your systems. It’s very common on larger desktop computers to find
3-and-1/2 inch drives, like the hard drive that we see here. You might also find 2-and-1/2 inch drives on that same
desktop platform and very commonly in laptop platforms. And on newer systems, whether they’re desktop or laptop systems,
you may find an M.2 drive, which is much smaller than the 3-and-1/2 or 2-and-1/2 inch drives.

The evolution of storage has begun moving us away from the spinning mechanical hard drives into a system that has no
moving parts at all. This is referring, of course, to a solid-state drive, or SSD. Again, we have non-volatile memory
that’s inside of this, so we can power off our system and our data remains on these SSDs. And there’s no moving parts
inside of these SSDs, so we don’t have to worry about a mechanical failure causing problems being able to read and write
from the storage device.

One significant and very obvious advantage to an SSD is that the performance is so much faster than a traditional hard
drive. We don’t have to worry about the revolutions per minute or the amount of data that we can transfer as these
platters are spinning around. Instead with an SSD, we can access data directly and retrieve it at extremely high rates
of speed.

As SSDs have improved over time, one of the things we found is that the interface we use to access the SSD is an
important part of the overall performance. One common type of interface that we use on our hard drives is a SATA
interface, so it makes sense that we might have a SATA interface also available for an SSD. This means that we could
remove a SATA drive from a desktop or a laptop and simply replace it with an SSD that has the same type of SATA
interface.

One of the advantages of having a laptop or mobile device is that they’re very portable. And if you can make the
components inside of that device smaller, then you can decrease the overall size of that device. With SATA, we were
originally limited by the size of a spinning drive. And the 3-and-1/2 or 2-and-1/2 inch SATA drives took up quite a bit
of room inside of our mobile devices.

So we created a new interface for SATA called mSATA. This stands for mini-SATA. Instead of having a spinning drive
inside of a case, we can take that SSD memory and put it on a much smaller component.

It’s not unusual to find mSATA drives inside of mobile devices or even some desktop systems. But when we introduce the
M.2 interface, we decided that that would be a much more reasonable and much smaller type of component. And you’ll find
that mSATA interfaces are not very common on new devices today.

Here’s a view of an mSATA drive installed inside of a laptop. And you can see that it doesn’t take up much space. It’s
certainly much smaller than installing a full-sized 2-and-1/2 inch drive inside of this chassis. This provided a great
way to shrink down the overall size of these devices, and certainly contributed to the ability to have much more mobile
devices containing much larger amounts of storage space.

But one of the challenges with SATA is that it was originally designed to transfer data from hard drives. SATA uses a
protocol known as AHCI. This stands for the Advanced Host Controller Interface that moves data from the storage drive
into the memory of your system. This SATA revision 3, for example, can have throughputs up to 600 megabytes per second.
But our SSDs can exceed these values, which means connecting to a SATA interface may be limiting your throughput to an
SSD.

For that reason, we created a new way to communicate to our SSD called NVMe. This is Non-volatile Memory Express. And
it’s designed to match the throughputs that you would need for technologies such as an SSD.

This means we’ll have lower latency and much higher throughput when communicating to these high-speed SSDs, which also
means that we can really take advantage of the full capabilities of that technology. Since this is not a SATA
connection, then we’re not connecting our SSD to a SATA interface. Instead, we’re using a type of interface called an
M.2 interface.

There are a number of advantages with using M.2 instead of using a traditional SATA connection. One of the first
advantages is that this is a much smaller form factor than SATA. This has a single connection to the motherboard. And
you can see there’s no external power that’s required. It simply pulls the power from the motherboard itself.

This M.2 interface can also directly connect to the PCI Express bus that is in your computer, providing much higher
throughput than you would get through something like a SATA interface. It’s very common to see 4 gigabytes per second
throughput when you’re using an NVMe with your SSD through a by 4 PCIe interface.

If you’re planning to use this type of drive on your system, then you should also know that there’s more than one type
of M.2 interface. We refer to these keys that are in the interface with different names. There’s a B key, the M key. And
some M.2 interfaces will support the B and the M key.

So to get the best possible throughput for an M.2-based SSD, you want to be sure that your system can support NVMe. Your
M.2 interface may only be using the traditional AHCI throughput that you might see with a SATA connection. So you’ll
need to check the documentation for your motherboard to see exactly what’s supported.

Your motherboard might also only support one type of M.2 key. It may be an M key or a B key, so you need to make sure
that you’re buying the right M.2-based SSD for your motherboard. Here’s a close-up of that SSD. And you can see that
this SSD model supports a motherboard that can take an M key SSD or a B key SSD.

Installing an M.2 drive on your motherboard is relatively straightforward. You would first find the M.2 interface on the
motherboard and slide the SSD into that slot. You then fasten the SSD to the drive using a screw that’s on the other end
of the SSD.

Another type of storage that we use extensively on our laptops and desktop computers is flash memory. Technically, this
is an EEPROM, which is an electrically erasable programmable read-only memory. This is also a non-volatile form of
storage, so you can remove the flash drive from your system. There’s no power going to the flash drive, yet it’s able to
retain all of the data we’ve stored in that flash memory.

One concern with flash memory is that it does have a limit to the number of times you can write information to that
drive. Once you hit that threshold, you’re able to read the information that is on that flash drive, but you would not
be able to rewrite or change any of that information in the future.

It’s also not recommended to use flash drives as archival storage. These are very small storage devices, and they can be
easily lost or damaged. It’s always good to have a backup of all of your data, but especially data that you’re storing
on a flash drive.

Here are some very common examples of flash memory. Your USB flash drive that you’re probably familiar with is up here
in the upper left. And if you have a camera or some other mobile device, you may also be using an SD type of flash
memory. If you have a mobile phone or a very small device, it might use a very small version of the SD called a microSD.
And for older systems, you may find some legacy flash drives, such as the compact flash or the xD picture card.

Another type of storage that is becoming increasingly difficult to find on our systems is an optical drive. This is a
storage type that uses a laser to either read small pits or different colors that are on this individual optical disk.
This is a very common type of storage to use for archival media, especially if it’s a media type that you would not want
to change once it’s been written.

There are many different formats of optical drives. But some of the most popular are CD-ROMs, DVD-ROMs, or Blu-ray. And
you’ll find optical drives as an option available for internal laptop or desktop use. And there are also external drives
that can connect via USB to those systems as well.

## RAID

It’s not uncommon to use hard drives to store large amounts of information. Terabytes upon terabytes of your data can be
stored on the single spinning drive. And of course, because there are moving parts inside of these drives, they will
eventually fail. Fortunately, there are things you can do so that when a drive fails, your data will always remain
available. And in this video, we’ll look at how RAID arrays can be configured to provide this type of data redundancy.

As we go through this video, it may seem that RAID would be a very good way to backup your data. But the data in a RAID
array is not a copy of your data. It is the data that you are actively retrieving or storing. And because of that, you
have to keep in mind that RAID is not a method of backup. It’s simply a way to maintain uptime and availability if one
of those drives happens to fail.

The term RAID is an acronym for Redundant Array of independent Disks. Earlier versions of this acronym used the word
Inexpensive Disks instead of Independent, but it’s effectively the same idea. We can use multiple storage drives in a
system that work together to maintain this uptime and availability. There are different types of RAID. We refer to these
different types as different RAID levels. And although the name is Redundant Array of Independent Disks, there are some
RAID levels that do not provide redundancy. So you have to be very careful when you’re initially setting up your RAID
array that you’re choosing the right RAID level.

Let’s step through each one of these RAID levels to see how they might be used. And we’ll start with RAID 0 or striping.
We refer to this as striping because we have at least two drives in a RAID 0 array. And instead of writing everything to
one drive or everything to the other drive, we take all of our data and we split it evenly between these two drives.

So let’s take the example of a file that exists on eight different blocks. And we have a disk 0 and a disk one. That
single file will be split evenly between these two disks. So block one is on disk 0. Block 2 is on disk 1. Block 3 is
back to disk 0. Block 4 is on disk 1. So you can see that distributing this across multiple drives provides a
performance increase because we only have to write or read half of the data if we have two separate drives.

But one of the problems with this is that if we lose one of these drives, none of this data will now be available
because you’ve effectively lost half of the data that you’ve stored. You should always think that RAID 0 is the same as
having 0 redundancy.

RAID 1 looks very similar to RAID 0 in its structure. You can see there is a disk 0 and a disk 1. But with RAID 1, we
are duplicating data between both of these drives. So each drive effectively is a mirror image of the other. That’s why
we refer to RAID 1 as mirroring. You can obviously see in this scenario that we are using twice as much drive space than
we would use with RAID 0.

Because we are duplicating every single drive, we will effectively need twice as much storage to be able to store this
same amount of information. But on the plus side, if we lose either of these physical disks, our data remains available
because we have an exact duplicate of the data on the other disk. It’s not uncommon when working with a RAID array that
you would lose a drive and not even realize it until you receive an alert or message that the drive is failed.

Instead of duplicating every bit of data that you’re storing on these drives, there is a more efficient method. That
method is RAID 5, which we call striping with parity. This is the same as RAID 0, where we take all of the information
that we’re storing and we put pieces of that data across different drives. But unlike RAID 0, which of course, has 0
redundancy we have an additional drive where we store some parity information. That parity information allows us to
rebuild this data if we happen to lose any of these physical drives.

This is a much more efficient use of drive space because you have all of the data being spread across drives and then on
one additional drive some parity information. So if you’re storing this on four separate drives, three of those drives
can be used for data and one of those drives can be used for parity. As you can see from our example, we also distribute
the parity to different drives, which helps during the recovery process. And that recovery process is important when a
single drive fails in that RAID 5 array.

It may seem that losing a single drive will also cause some of our data to be lost. And although that’s true, we’re able
to rebuild this data in real time by taking advantage of the parity information that we stored separately. Having to
recalculate this data in real time based on the parity that’s left over could cause a performance hit because there are
CPU cycles required to do that. But with the proper processing on the RAID controller or the proper CPU inside of your
system, you may not even see that a performance issue is occurring.

And the last RAID type we’ll look at is RAID 10. Some people refer to this as RAID 1 plus 0 or a stripe of mirrors.
Let’s go back to that original RAID 0 configuration. And in this example, we have RAID 0 with three separate physical
drives. And you can see that we are evenly distributing our files across all three of those individual drives. As with
RAID 0, if we lose any one of these physical drives, then all of our data is inaccessible.

So with RAID 1 plus 0, we add on the RAID 1 part or the mirroring aspect and we start mirroring all of our RAID 0
arrays. So now we’re still storing three separate stripes of data, but instead of only having one copy of that stripe,
we are mirroring each of those stripes of data. That way if we lose any one of these drives, we’re still up and running
because we have an exact duplicate of that stripe. And in our example, we could even lose three separate drives and
still have access to all of our data as long as the three drives that we’re losing are part of the single pairs in each
individual RAID 1 mirror.
