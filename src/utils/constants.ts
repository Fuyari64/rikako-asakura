import { ApplicationCommandOptionChoiceData } from "discord.js";

interface gameTypeObject {
  name: string;
  value: string;
}

export const gameTypeList: gameTypeObject[] = [
    {
      name: "7 Days to Die (2013)",
      value: "7d2d"
    },
    {
      name: "Age of Chivalry (2007)",
      value: "ageofchivalry"
    },
    {
      name: "Age of Empires 2 (1999)",
      value: "aoe2"
    },
    {
      name: "Alien Arena (2004)",
      value: "alienarena"
    },
    {
      name: "Alien Swarm (2010)",
      value: "alienswarm"
    },
    {
      name: "Aliens versus Predator 2 (2001)",
      value: "avp2"
    },
    {
      name: "Aliens vs. Predator (2010)",
      value: "avp2010"
    },
    {
      name: "America's Army (2002)",
      value: "americasarmy"
    },
    {
      name: "America's Army 2 (2003)",
      value: "americasarmy2"
    },
    {
      name: "America's Army 3 (2009)",
      value: "americasarmy3"
    },
    {
      name: "America's Army: Proving Grounds (2015)",
      value: "americasarmypg"
    },
    {
      name: "Arca Sim Racing (2008)",
      value: "arcasimracing"
    },
    {
      name: "Ark: Survival Evolved (2017)",
      value: "arkse"
    },
    {
      name: "ARMA 2 (2009)",
      value: "arma2"
    },
    {
      name: "ARMA 2: Operation Arrowhead (2010)",
      value: "arma2oa"
    },
    {
      name: "ARMA 3 (2013)",
      value: "arma3"
    },
    {
      name: "ARMA: Armed Assault (2007)",
      value: "arma"
    },
    {
      name: "ARMA: Cold War Assault (2011)",
      value: "armacwa"
    },
    {
      name: "ARMA: Resistance (2011)",
      value: "armar"
    },
    {
      name: "Armagetron Advanced (2001)",
      value: "armagetron"
    },
    {
      name: "Assetto Corsa (2014)",
      value: "assettocorsa"
    },
    {
      name: "Atlas (2018)",
      value: "atlas"
    },
    {
      name: "Baldur's Gate (1998)",
      value: "baldursgate"
    },
    {
      name: "Barotrauma (2019)",
      value: "barotrauma"
    },
    {
      name: "Battalion 1944 (2018)",
      value: "bat1944"
    },
    {
      name: "Battlefield 1942 (2002)",
      value: "bf1942"
    },
    {
      name: "Battlefield 2 (2005)",
      value: "bf2"
    },
    {
      name: "Battlefield 2142 (2006)",
      value: "bf2142"
    },
    {
      name: "Battlefield 3 (2011)",
      value: "bf3"
    },
    {
      name: "Battlefield 4 (2013)",
      value: "bf4"
    },
    {
      name: "Battlefield Hardline (2015)",
      value: "bfh"
    },
    {
      name: "Battlefield Vietnam (2004)",
      value: "bfv"
    },
    {
      name: "Battlefield: Bad Company 2 (2010)",
      value: "bfbc2"
    },
    {
      name: "Breach (2011)",
      value: "breach"
    },
    {
      name: "Breed (2004)",
      value: "breed"
    },
    {
      name: "Brink (2011)",
      value: "brink"
    },
    {
      name: "Build and Shoot / Ace of Spades Classic (2012)",
      value: "buildandshoot"
    },
    {
      name: "Call of Duty (2003)",
      value: "cod"
    },
    {
      name: "Call of Duty 2 (2005)",
      value: "cod2"
    },
    {
      name: "Call of Duty 3 (2006)",
      value: "cod3"
    },
    {
      name: "Call of Duty 4: Modern Warfare (2007)",
      value: "cod4"
    },
    {
      name: "Call of Duty: Modern Warfare 2 (2009)",
      value: "codmw2"
    },
    {
      name: "Call of Duty: Modern Warfare 3 (2011)",
      value: "codmw3"
    },
    {
      name: "Call of Duty: United Offensive (2004)",
      value: "coduo"
    },
    {
      name: "Call of Duty: World at War (2008)",
      value: "codwaw"
    },
    {
      name: "Call of Juarez (2006)",
      value: "callofjuarez"
    },
    {
      name: "Chaser (2003)",
      value: "chaser"
    },
    {
      name: "Chrome (2003)",
      value: "chrome"
    },
    {
      name: "Codename Eagle (2000)",
      value: "codenameeagle"
    },
    {
      name: "Command and Conquer: Renegade (2002)",
      value: "cacrenegade"
    },
    {
      name: "Commandos 3: Destination Berlin (2003)",
      value: "commandos3"
    },
    {
      name: "Conan Exiles (2018)",
      value: "conanexiles"
    },
    {
      name: "Contagion (2011)",
      value: "contagion"
    },
    {
      name: "Contract J.A.C.K. (2003)",
      value: "contactjack"
    },
    {
      name: "Counter-Strike 1.5 (2002)",
      value: "cs15"
    },
    {
      name: "Counter-Strike 1.6 (2003)",
      value: "cs16"
    },
    {
      name: "Counter-Strike: 2D (2004)",
      value: "cs2d"
    },
    {
      name: "Counter-Strike: Condition Zero (2004)",
      value: "cscz"
    },
    {
      name: "Counter-Strike: Global Offensive (2012)",
      value: "csgo"
    },
    {
      name: "Counter-Strike: Source (2004)",
      value: "css"
    },
    {
      name: "Cross Racing Championship Extreme 2005 (2005)",
      value: "crossracing"
    },
    {
      name: "Crysis (2007)",
      value: "crysis"
    },
    {
      name: "Crysis 2 (2011)",
      value: "crysis2"
    },
    {
      name: "Crysis Wars (2008)",
      value: "crysiswars"
    },
    {
      name: "Daikatana (2000)",
      value: "daikatana"
    },
    {
      name: "Dark and Light (2017)",
      value: "dnl"
    },
    {
      name: "Dark Messiah of Might and Magic (2006)",
      value: "dmomam"
    },
    {
      name: "Darkest Hour: Europe '44-'45 (2008)",
      value: "darkesthour"
    },
    {
      name: "Day of Defeat (2003)",
      value: "dod"
    },
    {
      name: "Day of Defeat: Source (2005)",
      value: "dods"
    },
    {
      name: "Day of Infamy (2017)",
      value: "doi"
    },
    {
      name: "Days of War (2017)",
      value: "daysofwar"
    },
    {
      name: "DayZ (2018)",
      value: "dayz"
    },
    {
      name: "DayZ Mod (2013)",
      value: "dayzmod"
    },
    {
      name: "Deadly Dozen: Pacific Theater (2002)",
      value: "deadlydozenpt"
    },
    {
      name: "Deer Hunter 2005 (2004)",
      value: "dh2005"
    },
    {
      name: "Descent 3 (1999)",
      value: "descent3"
    },
    {
      name: "Deus Ex (2000)",
      value: "deusex"
    },
    {
      name: "Devastation (2003)",
      value: "devastation"
    },
    {
      name: "Dino D-Day (2011)",
      value: "dinodday"
    },
    {
      name: "Dirt Track Racing 2 (2002)",
      value: "dirttrackracing2"
    },
    {
      name: "Discord",
      value: "discord"
    },
    {
      name: "Doom 3 (2004)",
      value: "doom3"
    },
    {
      name: "Dota 2 (2013)",
      value: "dota2"
    },
    {
      name: "Drakan: Order of the Flame (1999)",
      value: "drakan"
    },
    {
      name: "Empyrion - Galactic Survival (2015)",
      value: "empyrion"
    },
    {
      name: "Enemy Territory: Quake Wars (2007)",
      value: "etqw"
    },
    {
      name: "F.E.A.R. (2005)",
      value: "fear"
    },
    {
      name: "F1 Challenge '99-'02 (2002)",
      value: "f1c9902"
    },
    {
      name: "Far Cry (2004)",
      value: "farcry"
    },
    {
      name: "Far Cry 2 (2008)",
      value: "farcry2"
    },
    {
      name: "Formula One 2002 (2002)",
      value: "f12002"
    },
    {
      name: "Fortress Forever (2007)",
      value: "fortressforever"
    },
    {
      name: "Frontlines: Fuel of War (2008)",
      value: "ffow"
    },
    {
      name: "Garry's Mod (2004)",
      value: "garrysmod"
    },
    {
      name: "Geneshift (2017)",
      value: "geneshiftmutantfactions"
    },
    {
      name: "Giants: Citizen Kabuto (2000)",
      value: "giantscitizenkabuto"
    },
    {
      name: "Global Operations (2002)",
      value: "globaloperations"
    },
    {
      name: "GoldenEye: Source (2010)",
      value: "ges"
    },
    {
      name: "Gore: Ultimate Soldier (2002)",
      value: "gore"
    },
    {
      name: "Grand Theft Auto V - FiveM (2013)",
      value: "fivem"
    },
    {
      name: "Grand Theft Auto: San Andreas - Multi Theft Auto (2004)",
      value: "mtasa"
    },
    {
      name: "Grand Theft Auto: Vice City - Multi Theft Auto (2002)",
      value: "mtavc"
    },
    {
      name: "Ground Breach (2018)",
      value: "groundbreach"
    },
    {
      name: "Gunman Chronicles (2000)",
      value: "gunmanchronicles"
    },
    {
      name: "Half-Life 2: Deathmatch (2004)",
      value: "hl2dm"
    },
    {
      name: "Half-Life Deathmatch (1998)",
      value: "hldm"
    },
    {
      name: "Half-Life Deathmatch: Source (2005)",
      value: "hldms"
    },
    {
      name: "Halo (2003)",
      value: "halo"
    },
    {
      name: "Halo 2 (2007)",
      value: "halo2"
    },
    {
      name: "Hell Let Loose",
      value: "hll"
    },
    {
      name: "Heretic II (1998)",
      value: "heretic2"
    },
    {
      name: "Hexen II (1997)",
      value: "hexen2"
    },
    {
      name: "Hidden & Dangerous 2 (2003)",
      value: "had2"
    },
    {
      name: "Homefront (2011)",
      value: "homefront"
    },
    {
      name: "Homeworld 2 (2003)",
      value: "homeworld2"
    },
    {
      name: "Hurtworld (2015)",
      value: "hurtworld"
    },
    {
      name: "I.G.I.-2: Covert Strike (2003)",
      value: "igi2"
    },
    {
      name: "IL-2 Sturmovik (2001)",
      value: "il2"
    },
    {
      name: "Insurgency (2014)",
      value: "insurgency"
    },
    {
      name: "Insurgency: Sandstorm (2018)",
      value: "insurgencysandstorm"
    },
    {
      name: "Iron Storm (2002)",
      value: "ironstorm"
    },
    {
      name: "James Bond 007: Nightfire (2002)",
      value: "jamesbondnightfire"
    },
    {
      name: "Just Cause 2 - Multiplayer (2010)",
      value: "jc2mp"
    },
    {
      name: "Just Cause 3 - Multiplayer (2017)",
      value: "jc3mp"
    },
    {
      name: "Kerbal Space Program - DMP Multiplayer (2015)",
      value: "kspdmp"
    },
    {
      name: "Killing Floor (2009)",
      value: "killingfloor"
    },
    {
      name: "Killing Floor 2 (2016)",
      value: "killingfloor2"
    },
    {
      name: "Kingpin: Life of Crime (1999)",
      value: "kingpin"
    },
    {
      name: "Kiss: Psycho Circus: The Nightmare Child (2000)",
      value: "kisspc"
    },
    {
      name: "Kreedz Climbing (2017)",
      value: "kzmod"
    },
    {
      name: "Left 4 Dead (2008)",
      value: "left4dead"
    },
    {
      name: "Left 4 Dead 2 (2009)",
      value: "left4dead2"
    },
    {
      name: "Mafia II - Multiplayer (2010)",
      value: "m2mp"
    },
    {
      name: "Mafia II - Online (2010)",
      value: "m2o"
    },
    {
      name: "Medal of Honor (2010)",
      value: "moh2010"
    },
    {
      name: "Medal of Honor: Airborne (2007)",
      value: "mohab"
    },
    {
      name: "Medal of Honor: Allied Assault (2002)",
      value: "mohaa"
    },
    {
      name: "Medal of Honor: Allied Assault Breakthrough (2003)",
      value: "mohbt"
    },
    {
      name: "Medal of Honor: Allied Assault Spearhead (2002)",
      value: "mohsh"
    },
    {
      name: "Medal of Honor: Pacific Assault (2004)",
      value: "mohpa"
    },
    {
      name: "Medal of Honor: Warfighter (2012)",
      value: "mohwf"
    },
    {
      name: "Medieval Engineers (2015)",
      value: "medievalengineers"
    },
    {
      name: "Minecraft (2009)",
      value: "minecraftminecraftping"
    },
    {
      name: "Minecraft: Bedrock Edition (2011)",
      value: "minecraftpeminecraftbe"
    },
    {
      name: "Monday Night Combat (2011)",
      value: "mnc"
    },
    {
      name: "Mordhau (2019)",
      value: "mordhau"
    },
    {
      name: "Mumble - GTmurmur Plugin (2005)",
      value: "mumble"
    },
    {
      name: "Mumble - Lightweight (2005)",
      value: "mumbleping"
    },
    {
      name: "NASCAR Thunder 2004 (2003)",
      value: "nascarthunder2004"
    },
    {
      name: "Natural Selection (2002)",
      value: "ns"
    },
    {
      name: "Natural Selection 2 (2012)",
      value: "ns2"
    },
    {
      name: "Need for Speed: Hot Pursuit 2 (2002)",
      value: "nfshp2"
    },
    {
      name: "Nerf Arena Blast (1999)",
      value: "nab"
    },
    {
      name: "netPanzer (2002)",
      value: "netpanzer"
    },
    {
      name: "Neverwinter Nights (2002)",
      value: "nwn"
    },
    {
      name: "Neverwinter Nights 2 (2006)",
      value: "nwn2"
    },
    {
      name: "Nexuiz (2005)",
      value: "nexuiz"
    },
    {
      name: "Nitro Family (2004)",
      value: "nitrofamily"
    },
    {
      name: "No More Room in Hell (2011)",
      value: "nmrih"
    },
    {
      name: "No One Lives Forever 2: A Spy in H.A.R.M.'s Way (2002)",
      value: "nolf2"
    },
    {
      name: "Nuclear Dawn (2011)",
      value: "nucleardawn"
    },
    {
      name: "OpenArena (2005)",
      value: "openarena"
    },
    {
      name: "OpenTTD (2004)",
      value: "openttd"
    },
    {
      name: "Operation Flashpoint: Cold War Crisis (2001)",
      value: "operationflashpointflashpoint"
    },
    {
      name: "Operation Flashpoint: Resistance (2002)",
      value: "flashpointresistance"
    },
    {
      name: "Painkiller",
      value: "painkiller"
    },
    {
      name: "PixARK (2018)",
      value: "pixark"
    },
    {
      name: "Post Scriptum",
      value: "ps"
    },
    {
      name: "Postal 2",
      value: "postal2"
    },
    {
      name: "Prey",
      value: "prey"
    },
    {
      name: "Primal Carnage: Extinction",
      value: "primalcarnage"
    },
    {
      name: "Project Reality: Battlefield 2 (2005)",
      value: "prbf2"
    },
    {
      name: "Project Zomboid",
      value: "przomboid"
    },
    {
      name: "Quake 1: QuakeWorld (1996)",
      value: "quake1"
    },
    {
      name: "Quake 2 (1997)",
      value: "quake2"
    },
    {
      name: "Quake 3: Arena (1999)",
      value: "quake3"
    },
    {
      name: "Quake 4 (2005)",
      value: "quake4"
    },
    {
      name: "Quake Live (2010)",
      value: "quakelive"
    },
    {
      name: "Rag Doll Kung Fu",
      value: "ragdollkungfu"
    },
    {
      name: "Rainbow Six",
      value: "r6"
    },
    {
      name: "Rainbow Six 2: Rogue Spear",
      value: "r6roguespear"
    },
    {
      name: "Rainbow Six 3: Raven Shield",
      value: "r6ravenshield"
    },
    {
      name: "RalliSport Challenge",
      value: "rallisportchallenge"
    },
    {
      name: "Rally Masters",
      value: "rallymasters"
    },
    {
      name: "Red Orchestra",
      value: "redorchestra"
    },
    {
      name: "Red Orchestra 2",
      value: "redorchestra2"
    },
    {
      name: "Red Orchestra: Ostfront 41-45",
      value: "redorchestraost"
    },
    {
      name: "Redline",
      value: "redline"
    },
    {
      name: "Return to Castle Wolfenstein",
      value: "rtcw"
    },
    {
      name: "rFactor",
      value: "rfactor"
    },
    {
      name: "Ricochet",
      value: "ricochet"
    },
    {
      name: "Rise of Nations",
      value: "riseofnations"
    },
    {
      name: "Rising Storm 2: Vietnam",
      value: "rs2"
    },
    {
      name: "Rune",
      value: "rune"
    },
    {
      name: "Rust",
      value: "rust"
    },
    {
      name: "S.T.A.L.K.E.R.",
      value: "stalker"
    },
    {
      name: "San Andreas Multiplayer",
      value: "samp"
    },
    {
      name: "Savage 2: A Tortured Soul (2008)",
      value: "savage2"
    },
    {
      name: "Serious Sam",
      value: "ss"
    },
    {
      name: "Serious Sam 2",
      value: "ss2"
    },
    {
      name: "Shattered Horizon",
      value: "shatteredhorizon"
    },
    {
      name: "Shogo",
      value: "shogo"
    },
    {
      name: "Shootmania",
      value: "shootmania"
    },
    {
      name: "SiN",
      value: "sin"
    },
    {
      name: "SiN Episodes",
      value: "sinep"
    },
    {
      name: "Soldat",
      value: "soldat"
    },
    {
      name: "Soldier of Fortune",
      value: "sof"
    },
    {
      name: "Soldier of Fortune 2",
      value: "sof2"
    },
    {
      name: "Space Engineers",
      value: "spaceengineers"
    },
    {
      name: "Squad",
      value: "squad"
    },
    {
      name: "Star Trek: Bridge Commander",
      value: "stbc"
    },
    {
      name: "Star Trek: Voyager - Elite Force",
      value: "stvef"
    },
    {
      name: "Star Trek: Voyager - Elite Force 2",
      value: "stvef2"
    },
    {
      name: "Star Wars Jedi Knight II: Jedi Outcast (2002)",
      value: "swjk2"
    },
    {
      name: "Star Wars Jedi Knight: Jedi Academy (2003)",
      value: "swjk"
    },
    {
      name: "Star Wars: Battlefront",
      value: "swbf"
    },
    {
      name: "Star Wars: Battlefront 2",
      value: "swbf2"
    },
    {
      name: "Star Wars: Republic Commando",
      value: "swrc"
    },
    {
      name: "Starbound",
      value: "starbound"
    },
    {
      name: "StarMade",
      value: "starmade"
    },
    {
      name: "Starsiege (2009)",
      value: "starsiege"
    },
    {
      name: "Suicide Survival",
      value: "suicidesurvival"
    },
    {
      name: "Sven Coop",
      value: "svencoop"
    },
    {
      name: "SWAT 4",
      value: "swat4"
    },
    {
      name: "Synergy",
      value: "synergy"
    },
    {
      name: "Tactical Ops",
      value: "tacticalops"
    },
    {
      name: "Take On Helicopters (2011)",
      value: "takeonhelicopters"
    },
    {
      name: "Team Factor",
      value: "teamfactor"
    },
    {
      name: "Team Fortress 2",
      value: "tf2"
    },
    {
      name: "Team Fortress Classic",
      value: "tfc"
    },
    {
      name: "Teamspeak 2",
      value: "teamspeak2"
    },
    {
      name: "Teamspeak 3",
      value: "teamspeak3"
    },
    {
      name: "Terminus",
      value: "terminus"
    },
    {
      name: "Terraria - TShock (2011)",
      value: "terrariatshock"
    },
    {
      name: "The Forrest (2014)",
      value: "forrest"
    },
    {
      name: "The Hidden (2005)",
      value: "hidden"
    },
    {
      name: "The Operative: No One Lives Forever (2000)",
      value: "nolf"
    },
    {
      name: "The Ship",
      value: "ship"
    },
    {
      name: "Tom Clancy's Ghost Recon Advanced Warfighter (2006)",
      value: "graw"
    },
    {
      name: "Tom Clancy's Ghost Recon Advanced Warfighter 2 (2007)",
      value: "graw2"
    },
    {
      name: "Tony Hawk's Pro Skater 3",
      value: "thps3"
    },
    {
      name: "Tony Hawk's Pro Skater 4",
      value: "thps4"
    },
    {
      name: "Tony Hawk's Underground 2",
      value: "thu2"
    },
    {
      name: "Tower Unite",
      value: "towerunite"
    },
    {
      name: "Trackmania 2",
      value: "trackmania2"
    },
    {
      name: "Trackmania Forever",
      value: "trackmaniaforever"
    },
    {
      name: "Tremulous",
      value: "tremulous"
    },
    {
      name: "Tribes 1: Starsiege",
      value: "tribes1"
    },
    {
      name: "Tribes: Vengeance",
      value: "tribesvengeance"
    },
    {
      name: "Tron 2.0",
      value: "tron20"
    },
    {
      name: "Turok 2",
      value: "turok2"
    },
    {
      name: "Universal Combat",
      value: "universalcombat"
    },
    {
      name: "Unreal",
      value: "unreal"
    },
    {
      name: "Unreal Tournament",
      value: "ut"
    },
    {
      name: "Unreal Tournament 2003",
      value: "ut2003"
    },
    {
      name: "Unreal Tournament 2004",
      value: "ut2004"
    },
    {
      name: "Unreal Tournament 3",
      value: "ut3"
    },
    {
      name: "unturned",
      value: "unturned"
    },
    {
      name: "Urban Terror",
      value: "urbanterror"
    },
    {
      name: "V8 Supercar Challenge",
      value: "v8supercar"
    },
    {
      name: "Valheim (2021)",
      value: "valheim"
    },
    {
      name: "Ventrilo",
      value: "ventrilo"
    },
    {
      name: "Vice City Multiplayer",
      value: "vcmp"
    },
    {
      name: "Vietcong",
      value: "vietcong"
    },
    {
      name: "Vietcong 2",
      value: "vietcong2"
    },
    {
      name: "Warsow",
      value: "warsow"
    },
    {
      name: "Wheel of Time",
      value: "wheeloftime"
    },
    {
      name: "Wolfenstein 2009",
      value: "wolfenstein2009"
    },
    {
      name: "Wolfenstein: Enemy Territory",
      value: "wolfensteinet"
    },
    {
      name: "Xpand Rally",
      value: "xpandrally"
    },
    {
      name: "Zombie Master",
      value: "zombiemaster"
    },
    {
      name: "Zombie Panic: Source",
      value: "zps"
    }
  ]

export const GAMEDIG_ATTEMPTS = 1;
export const IP_PORT_REGEX = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(:?(\d{1,5})?)/;
export const ONE_SEC_IN_MS = 1000;
export const ONE_MIN_IN_MS = 60 * ONE_SEC_IN_MS;
export const ONE_HOUR_IN_MS = 60 * ONE_MIN_IN_MS;
export const DEFAULT_INTERVAL = 2 * ONE_MIN_IN_MS;

export const intervalOptions: ApplicationCommandOptionChoiceData[] = [
  {
    name: '1 minute',
    value: 1 * ONE_MIN_IN_MS,
  },
  {
    name: '4 minutes',
    value: 4 * ONE_MIN_IN_MS,
  },
  {
    name: '6 minutes',
    value: 6 * ONE_MIN_IN_MS,
  },
  {
    name: '8 minutes',
    value: 8 * ONE_MIN_IN_MS,
  },
  {
    name: '10 minutes',
    value: 10 * ONE_MIN_IN_MS,
  },
  {
    name: '12 minutes',
    value: 14 * ONE_MIN_IN_MS,
  },
  {
    name: '14 minutes',
    value: 14 * ONE_MIN_IN_MS,
  },
]

