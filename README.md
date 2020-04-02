Brief summary understanding the Event Loop:

It's a continually running process that checks if the call stack is empty. It checks if the Call STack is empty  and if it is empty then it looks into the Event Queue. If there is something in the queu that is waiting, it is moved to the call stack. If not, then nothing happens.
