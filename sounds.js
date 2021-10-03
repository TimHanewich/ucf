var sounds = [];

function PlaySound(name)
{
    StopAllSounds();
    var a = new Audio("sounds/" + name);
    a.play();
    sounds.push(a);
}

function StopAllSounds()
{
    for (t = 0; t < sounds.length; t++)
    {
        sounds[t].pause();
    }
}