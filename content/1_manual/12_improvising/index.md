+++
title = "Improvising with Djazz"
weight = 120
+++

Each track or score can be played in **improvise** mode or not, by selecting or deselecting the "jam" button.  

When not in improvise mode--we'll call this **play** mode--the beats will be played one after the other as they were written/recorded in the loaded tracks.  In improvise mode, at each new beat, Djazz calculates a new beat's worth of music to play. The calculation consists of finding a beat in the database that is the “best match” (or at least a “good match”) based on the data that exists at the beginning of the new beat.  The selection is made using a data structure called a factor oracle.

In play mode, Djazz uses the beat number to calculate the next beat. In improvise mode, the beat number is not considered; the chord label from the song file is used.In each of these two modes changing the speed control will make play at the tempo given by the tap or play at a different speed: double speed, quadruple speed, half speed, and one and a half speed. The result is different, because play mode uses
beat _number_ messages and improvise mode uses beat _label_ messages.

In play mode, if the Speed Control is active, beat numbers are output at a different tempo than the input tap. The musical result is an interesting version of "playing out:" beats are played at a different rate, meaning their internal harmony, given by each beat's chord label, no longer aligns with that of the other tracks:

Master Clock Input:				| Am7    |       | D7    |       | Gmaj7   |   | Cmaj7 |
|--------|-------|-------|------|--------|---|---|-------|-----
Internal Clock Follower Output: | Am7    | D7    | Gmaj7 | Cmaj7 | Am7    | D7 | Gmaj7 | Cmaj7 

In improvise mode, with the speed control on, labels are still passed in at the original tempo. The result is that the improviser outputs beats that conform to the harmony of the given beat, even though they are at a different tempo:

Master Clock Input:| Am7    |       | D7    |       | Gmaj7   |   | Cmaj7 |
|--------|-------|-------|-------|-----|---|---|-------|-----
Improviser Output: | Am7    | Am7    | D7 | D7 | Gmaj7 | Gmaj7 | Cmaj7 | Cmaj7 

